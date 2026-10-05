import {Link, NavLink} from "react-router-dom";

import styles from "./Header.module.scss"
import {useAuth} from "../contexts/AuthContext.tsx";
import {useCart} from "../contexts/CartContext.tsx";
import cart from "../../assets/images/social icons/cart.png"
import catalog from "../../assets/images/social icons/catalog.svg"
import profile from "../../assets/images/social icons/profile.png"


function Header() {
    const { isLoggedIn, setIsLoggedIn, logout } = useAuth()
    const { clearCart, getQuantity } = useCart()

    const quantity = getQuantity()

    const handleLogout = () => {
        logout()
        clearCart()
        setIsLoggedIn(false)
    }

    const linkClassName = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.container}>
                    <Link to="/" className={styles.logo} ><p className={styles.first}>Gadget</p> <p className={styles.second}>Hub</p></Link>
                    <div className={styles.pages}>
                        <NavLink to="/catalog" className={linkClassName}>
                            <img src={catalog} alt="Catalog icon"/>
                            <p>Каталог</p>
                        </NavLink>
                        {isLoggedIn && <NavLink to="/cart" className={linkClassName}>
                            <img src={cart} alt="Cart icon"/>
                            <p>Корзина</p>
                            {quantity !== 0 && <div className={styles.quantity}>{quantity}</div>}
                        </NavLink>}
                        {!isLoggedIn && <NavLink to="/login" className={linkClassName}>
                            <img src={profile} alt="Login icon"/>
                            <p>Войти</p>
                        </NavLink>}
                        {isLoggedIn && <button className={styles.link} onClick={() => { handleLogout() }}>
                            <img src={profile} alt="Loout icon"/>
                            <p>Выйти</p>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header