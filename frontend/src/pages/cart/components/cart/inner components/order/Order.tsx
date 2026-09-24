import styles from './Order.module.scss'
import Select from "../select/Select.tsx"
import {useState} from "react"
import type {CartItem} from "../../../../../../dtos/CartItem.ts"
import * as React from "react"
import {useAuth} from "../../../../../../shared/contexts/AuthContext.tsx";
import {postNewOrder} from "../../../../api/CartPageAPI.ts";

function Order({items}: {items: CartItem[]}) {
    const { getClientId } = useAuth()

    const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
    const [isToTheDoor, setIsToTheDoor] = useState<boolean>(false)

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const clientId = getClientId()

        console.log(clientId)

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        const address = isToTheDoor ? (formData.get("address") as string) : null
        const isCash = paymentMethod === "Наличные"
        const isPackageRequired = formData.get("packaging") === "on";

        const productsAmount = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

        const productsJson = JSON.stringify(items)

        try {await postNewOrder({
            clientId: clientId,
            products: productsJson,
            productsAmount: productsAmount,
            totalPrice: totalPrice,
            email: email,
            phone: phone,
            address: address,
            isCash: isCash,
            isPackagingRequired: isPackageRequired
        }) }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <p className={styles.title}>Оформление заказа</p>
            <form className={styles.order} onSubmit={handleSubmit}>
                <div className={styles.contactData}>
                    <label>
                        <span>Телефон</span>
                        <input name="phone" placeholder="88005553535"/>
                        <span className={styles.star}>*</span>
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input name="email" placeholder="example@gmail.com"/>
                    </label>
                </div>
                <div className={styles.deliveryType}>
                    <label>
                        <input type="radio" name="delivery-type" checked={!isToTheDoor} onChange={() => setIsToTheDoor(false)}></input>
                        <span>Самовывоз</span>
                    </label>
                    <label>
                        <input type="radio" name="delivery-type" checked={isToTheDoor} onChange={() => setIsToTheDoor(true)}></input>
                        <span>Доставка</span>
                    </label>
                </div>
                {isToTheDoor &&
                    <label className={styles.delivery}>
                        <span>Адрес доставки</span>
                        <input name="address" placeholder="Улица Шишкина 128"/>
                        <span className={styles.star}>*</span>
                    </label>}
                <label className={styles.dropdown}>
                    <Select options={["Наличные", "Банковская карта"]} value={paymentMethod} placeholder={"Не выбрано"} onChange={setPaymentMethod}/>
                    <span className={styles.star}>*</span>
                </label>
                <label className={styles.package}>
                    <input type="checkbox" name="packaging"></input>
                    <span>Нужна упаковка</span>
                </label>
                <button className={styles.blueButton}>Оформить заказ</button>
            </form>
        </>
    )
}

export default Order