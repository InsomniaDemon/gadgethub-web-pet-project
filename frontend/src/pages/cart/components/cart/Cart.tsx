import styles from "./Cart.module.scss"
import {useCart} from "../../../../shared/contexts/CartContext.tsx";
import Goods from "./inner components/product/Goods.tsx";

function Cart() {
    const { getItems } = useCart()

    const items = getItems()

    return (
        <div className={styles.cart}>
            {items.length !== 0 &&
                <div className={styles.goods}>
                    {items.map(item =>
                        <Goods product={item.product} quantity={item.quantity}/>
                    )}
                </div>
            }
            {items.length === 0 &&}
        </div>
    )
}

export default Cart
