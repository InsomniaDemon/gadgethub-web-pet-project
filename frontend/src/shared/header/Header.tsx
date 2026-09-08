import {Link} from "react-router-dom";

import styles from "./Header.module.scss"


function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.container}>
                    <Link to="/" className={styles.logo} ><p className={styles.first}>Gadget</p> <p className={styles.second}>Hub</p></Link>
                    <Link to="/catalog" className={styles.catalogLink}>
                        <img src="src/assets/images/icons/catalog.svg" alt="Catalog icon"/>
                        <p>Каталог</p>
                    </Link>
                    <Link to="/login" className={styles.loginLink}>
                        <img src="src/assets/images/icons/profile.svg" alt="Login icon"/>
                        <p>Войти</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header