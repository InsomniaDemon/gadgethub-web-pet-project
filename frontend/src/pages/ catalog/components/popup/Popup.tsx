import styles from "./Popup.module.scss"
import type {Product} from "../../../../dtos/Product.ts";
import ToCartButton from "../../../../shared/to cart button/ToCartButton.tsx";
import type {Dispatch, SetStateAction} from "react";

function Popup({product, onClick}: {product: Product, onClick: Dispatch<SetStateAction<Product | undefined>>}) {
    return (
        <div className={styles.popup}>
            <div className={styles.bg}>
            </div>
            <div className={styles.card}>
                <button onClick={ () => onClick(undefined)}>крестик</button>
                <div className={styles.wrapper}>
                    <div className={styles.productImgContainer}>
                        <img src={product.image} alt="product img" className={styles.productImg}/>
                    </div>
                    <div className={styles.content}>
                        <p>{product.title}</p>
                    </div>
                </div>
                <ToCartButton/>
            </div>
        </div>
    )
}

export default Popup