import styles from "./Info.module.scss"
import phone from "../../../../assets/images/icons/mobile-black.png"
import envelope from "../../../../assets/images/icons/envelope.png"
import spot from "../../../../assets/images/icons/spot.png"

function Info() {

    return (
        <div className={styles.info}>
            <p>Работаем 24/7</p>
            <div className={styles.wrapper}>
                <a href="tel:8 800 555 35 35" className={styles.link}>
                    <img src={phone} alt="Phone icon"/>
                    <span>8 (800) 555 35 35</span>
                </a>
                <a href="mailto:daitemnexiao@bk.ru" className={styles.link}>
                    <img src={envelope} alt="Mail icon"/>
                    <span>gadget@hub.ru</span>
                </a>
                <a href="https://yandex.ru/maps/geo/posyolok_vesyolaya_zhizn/53021643/?ll=35.617739%2C53.360340&z=16" className={styles.link}>
                    <img src={spot} alt="Spot icon"/>
                    <span>Санкт-Петербург, ул. Барочная, д.7, корпус 2</span>
                </a>
            </div>
        </div>
    )
}

export default Info
