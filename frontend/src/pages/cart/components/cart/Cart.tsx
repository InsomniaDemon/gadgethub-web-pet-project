import styles from "./Cart.module.scss"
import {useCart} from "../../../../shared/contexts/CartContext.tsx";
import Goods from "./inner components/product/Goods.tsx";
import EmptyCart from "./inner components/empty cart/EmptyCart.tsx";
import {useState} from "react";
import Order from "./inner components/order/Order.tsx";

function Cart() {
    const { getItems, deleteProducts, clearCart } = useCart()

    const items = getItems()

    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())

    const toggleAll = () => {
        if (items.length === selectedIds.size) {
            setSelectedIds(new Set())
        } else {
            setSelectedIds(new Set(items.map(item => item.product.id)))
        }
    }

    const toggleOne = (productId: number) => {
        setSelectedIds(prev => {
            const next = new Set(prev)
            if (next.has(productId)) {
                next.delete(productId)
            } else {
                next.add(productId)
            }
            return next
        })
    }

    const deleteFromSelectedIds = (productId: number) => {
        setSelectedIds(prev => {
            const next = new Set(prev)
            if (next.has(productId)) {
                next.delete(productId)
            }
            return next
        })
    }

    const deleteSelected = () => {
        deleteProducts(selectedIds)
        setSelectedIds(new Set())
    }

    const deleteAll = () => {
        clearCart()
    }

    const calculateQuantity = () => {
        return items.reduce((sum, item) => selectedIds.has(item.product.id) ? sum + item.quantity : sum, 0)
    }

    const calculatePrice = () => {
        return items.reduce((sum, item) => selectedIds.has(item.product.id) ? sum + item.product.price * item.quantity : sum, 0)
    }

    const getEnding = () => {
        const quantity = calculateQuantity()
        const absCount = Math.abs(quantity) % 100;
        const lastDigit = absCount % 10;

        if (absCount > 10 && absCount < 20) return "ов";
        if (lastDigit > 1 && lastDigit < 5) return "а";
        if (lastDigit === 1) return "";
        return "ов";
    }

    return (
        <>
            {items.length !== 0 &&
                <div className={styles.cart}>
                    <div className={styles.goods}>
                        <div className={styles.checkAllWrapper}>
                            <label className={styles.checkAll}>
                                <input type="checkbox" name="all" value="all" checked={items.length === selectedIds.size} onChange={toggleAll}/>
                                <span>Выбрать всe</span>
                            </label>
                            {(selectedIds.size > 0 && selectedIds.size < items.length) &&
                                <button onClick={deleteSelected} className={styles.delete}>
                                    <img src="src/assets/images/icons/pink-cross.png" alt="Cross img" className={styles.crossImg}/>
                                    <span>Удалить выделенные</span>
                                </button>}
                            {selectedIds.size === items.length &&
                                <button onClick={deleteAll} className={styles.delete}>
                                    <img src="src/assets/images/icons/pink-cross.png" alt="Cross img" className={styles.crossImg}/>
                                    <span>Удалить все</span>
                                </button>}
                        </div>
                        {items.map(item =>
                            <Goods key={item.product.id} product={item.product} quantity={item.quantity} checked={selectedIds.has(item.product.id)} onToggle={() => toggleOne(item.product.id)} onDelete={() => deleteFromSelectedIds(item.product.id)}/>
                        )}
                        <span className={styles.summary}>{calculateQuantity()} товар{getEnding()} на {calculatePrice()} ₽</span>
                    </div>

                    <Order items={items} onSuccess={deleteAll}/>
                </div>
            }
            {items.length === 0 && <EmptyCart/>}
        </>
    )
}

export default Cart
