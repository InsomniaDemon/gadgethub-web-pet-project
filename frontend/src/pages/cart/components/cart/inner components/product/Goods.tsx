import type {Product} from "../../../../../../dtos/Product.ts";
import styles from "./Goods.module.scss"
import {useCart} from "../../../../../../shared/contexts/CartContext.tsx";
import * as React from "react";

function Goods({product, quantity}: {product: Product, quantity: number}) {
    const { deleteProduct } = useCart()


    return (
        <div className={styles.goods}>
            <div className={styles.imgContainer}>
                <img src={product.image} alt="Goods img"/>
            </div>
            <span>{product.title}</span>
            <div className={styles.quantity}>
                <button>
                    -
                </button>
                <span>{quantity}</span>
                <button>
                    +
                </button>
            </div>
            <span>{product.price * quantity}</span>
            <button className={styles.delete} onClick={() => deleteProduct(product)}>
                <img src="src/assets/images/icons/pink-cross.png" alt="Cross img"/>
                <span>Удалить</span>
            </button>
        </div>
    )
}

export default Goods
