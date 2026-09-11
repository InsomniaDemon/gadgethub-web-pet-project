import {Link} from "react-router-dom";

import styles from "./Header.module.scss"
import {useAuth} from "../contexts/AuthContext.tsx";


function Header() {
    const { isLoggedIn, setIsLoggedIn, logout } = useAuth()

    const handleLogout = () => {
        logout()
        setIsLoggedIn(false)
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
                    {isLoggedIn && <Link to="/cart" className={styles.link}>
                        <img src="src/assets/images/icons/cart.svg" alt="Cart icon"/>
                        <p>Корзина</p>
                    </Link>}
                    {!isLoggedIn && <Link to="/login" className={styles.link}>
                        <img src="src/assets/images/icons/profile.svg" alt="Login icon"/>
                        <p>Войти</p>
                    </Link>}
                    {isLoggedIn && <button className={styles.link} onClick={() => { handleLogout() }}>
                        <img src="src/assets/images/icons/profile.svg" alt="Loout icon"/>
                        <p>Выйти</p>
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Header