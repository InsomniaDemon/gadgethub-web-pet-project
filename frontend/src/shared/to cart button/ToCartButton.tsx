import styles from "./ToCartButton.module.scss"

function ToCartButton() {
    return (
        <button className={styles.toCartButton}>
            <img src="/src/assets/images/icons/cart-white.png" alt="Cart img"></img>
            В корзину
        </button>
    )
}

export default ToCartButton