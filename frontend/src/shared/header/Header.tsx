import {Link} from "react-router-dom";

import styles from "./Header.module.scss"
import {getIsLoggedIn, logout} from "./api/Header.ts";
import { useState} from "react";


function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn());

    const handleLogout = () => {
        logout();
        setIsLoggedIn(getIsLoggedIn);
    }

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.container}>
                    <Link to="/" className={styles.logo} ><p className={styles.first}>Gadget</p> <p className={styles.second}>Hub</p></Link>
                    <Link to="/catalog" className={styles.catalogLink}>
                        <img src="src/assets/images/icons/catalog.svg" alt="Catalog icon"/>
                        <p>Каталог</p>
                    </Link>
                    {isLoggedIn && <Link to="/cart" className={styles.loginLink}>
                        <img src="src/assets/images/icons/cart.svg" alt="Cart icon"/>
                        <p>Корзина</p>
                    </Link>}
                    {!isLoggedIn && <Link to="/login" className={styles.loginLink}>
                        <img src="src/assets/images/icons/profile.svg" alt="Login icon"/>
                        <p>Войти</p>
                    </Link>}
                    {isLoggedIn && <button className={styles.loginLink} onClick={() => { handleLogout() }}>
                        <img src="src/assets/images/icons/profile.svg" alt="Loout icon"/>
                        <p>Выйти</p>
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Header