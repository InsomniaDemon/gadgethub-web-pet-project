import styles from "./Sidebar.module.scss"
import Price from "./inner components/price/Price.tsx";
import CheckBoxes from "./inner components/checkboxes/CheckBoxes.tsx";

function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <p>Цена, ₽</p>
            <Price/>
            <p>Тип товара</p>
            <CheckBoxes toShow={["смартфоны", "часы", "наушники", "электротранспорт", "колонки", "очки виртуальной реальности"]}/>
            <p>Цвет</p>
            <CheckBoxes toShow={["чёрный", "белый", "серый", "синий", "зелёный", "фиолетовый"]}/>
        </div>
    )
}

export default Sidebar
