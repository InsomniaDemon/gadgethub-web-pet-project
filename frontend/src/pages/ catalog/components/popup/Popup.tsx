import styles from "./Popup.module.scss"
import type {Product} from "../../../../dtos/Product.ts";
import * as React from "react";
import ToCartButton from "../../../../shared/to cart button/ToCartButton.tsx";

function Popup({product}: {product: Product}) {
    return (
        <div className={styles.popup}>
            <div className={styles.bg}>
            </div>
            <div className={styles.card}>
                <div className={styles.wrapper}>
                    <div className={styles.productImgContainer}>
                        <img src={product.image} alt="product img" className={styles.productImg}/>
                    </div>
                    {product.text}
                </div>
                <ToCartButton/>
            </div>
        </div>
    )
}

export default Popup