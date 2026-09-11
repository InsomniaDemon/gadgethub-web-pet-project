import GoodsCard from "../../../../../../shared/goods card/GoodsCard.tsx";
import type {Product} from "../../../../../../dtos/Product.ts";
import styles from "./GoodsCardWrapper.module.scss"


function GoodsCardWrapper({product}: {product: Product}) {

    return (
        <div className={styles.card}>
            <GoodsCard product={product} disableHover={true}/>
            <button>
                <img src="/src/assets/images/icons/cart-white.png" alt="Cart img"></img>
                В корзину
            </button>
        </div>
    )
}

export default GoodsCardWrapper
