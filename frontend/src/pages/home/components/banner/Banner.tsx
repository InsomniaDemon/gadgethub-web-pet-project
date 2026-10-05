import styles from "./Banner.module.scss"
import banner from "../../../../assets/images/banners/banner2.png"

function Banner() {
    return (
        <img src={banner} alt="Banner img" className={styles.banner}/>
    )
}

export default Banner
