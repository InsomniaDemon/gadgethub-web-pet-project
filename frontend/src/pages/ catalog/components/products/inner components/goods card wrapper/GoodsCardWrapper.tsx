import GoodsCard from "../../../../../../shared/goods card/GoodsCard.tsx";
import type {Product} from "../../../../../../dtos/Product.ts";
import styles from "./GoodsCardWrapper.module.scss"
import ToCartButton from "../../../../../../shared/to cart button/ToCartButton.tsx";


function GoodsCardWrapper({product}: {product: Product}) {

    return (
        <div className={styles.card}>
            <GoodsCard product={product} disableHover={true}/>
            <ToCartButton/>
        </div>
    )
}

export default GoodsCardWrapper
