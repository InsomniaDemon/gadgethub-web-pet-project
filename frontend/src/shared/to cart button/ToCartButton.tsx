import styles from "./ToCartButton.module.scss"
import {useCart} from "../contexts/CartContext.tsx";
import type {Product} from "../../dtos/Product.ts";
import {useState} from "react";
import * as React from "react";

function ToCartButton({product}: {product: Product}) {
    const {addProduct, getProductQuantity} = useCart()

    const [quantity, setQuantity] = useState<number>(getProductQuantity(product))

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        addProduct(product)
        setQuantity(1)
    }

    return (
        <>
            {quantity === 0 &&
                <button className={styles.toCartButton} onClick={handleClick}>
                    <img src="/src/assets/images/icons/cart-white.png" alt="Cart img"></img>
                    В корзину
                </button>
            }
            {quantity > 0 &&
                <button className={styles.inCartButton} onClick={() => addProduct(product)}>
                    <img src="/src/assets/images/icons/cart-white.png" alt="Cart img"></img>
                    {quantity} шт.
                </button>

            }
        </>
    )
}

export default ToCartButton