import type {Product} from "../../dtos/Product.ts"
import styles from "./GoodsCard.module.scss"

function GoodsCard({product}: {product: Product}) {
    const hasNewLabel = product.labels.includes("new")
    const hasBestsellerLabel = product.labels.includes("bestseller")

    return (
        <div className={styles.card}>
            <div className={styles.productImgContainer}>
                <div className={styles.labels}>
                    <div className={styles.flex}>
                        {hasNewLabel && <img src="src/assets/images/labels/new.png" alt="New label"/>}
                        {hasBestsellerLabel && <img src="src/assets/images/labels/bestseller.png" alt="Bestseller label"/>}
                    </div>
                </div>
                <img src={product.image} alt="product image" className={styles.productImg}/>
            </div>
            <p className={styles.cost}>{product.price} ₽</p>
            <p className={styles.title}>{product.title}</p>
            <div className={styles.stars}>
                <img src="src/assets/images/icons/star.png" alt="star image"/>
                <span>{product.stars}</span>
            </div>
        </div>
    )
}

export default GoodsCard
