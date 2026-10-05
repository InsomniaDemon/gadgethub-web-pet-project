import styles from "./Footer.module.scss"
import vk from "../../assets/images/social icons/vk.png"
import tg from "../../assets/images/social icons/telegram.png"
import wu from "../../assets/images/social icons/whatsapp.png"
import phone from "../../assets/images/icons/mobile-blue.svg"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.links}>
                        <div>
                            <p className={styles.logo}>Gadget Hub</p>
                        </div>
                        <a href="tel:8 800 555 35 35" className={styles.phone}>
                            <img src={phone} alt="Phone icon"/>
                            8 (800) 555 35 35
                        </a>
                        <div className={styles.socials}>
                            <a href="https://www.youtube.com/watch?v=eTQvtx1T3Tg">
                                <img src={vk} alt="VK icon"/>
                            </a>
                            <a href="https://www.youtube.com/watch?v=eTQvtx1T3Tg">
                                <img src={tg} alt="Telegram icon"/>
                            </a>
                            <a href="https://www.youtube.com/watch?v=eTQvtx1T3Tg">
                                <img src={wu} alt="Whatsapp icon"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.belowText}>
                        <p className={styles.description}>Магазин надежных гаджетов</p>
                        <p>© 2024 ООО “Гаджет Хаб”. Все права защищены</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer