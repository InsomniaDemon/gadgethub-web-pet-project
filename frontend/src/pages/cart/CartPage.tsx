import {useAuth} from "../../shared/contexts/AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Cart from "./components/cart/Cart.tsx";
import History from "./components/history/History.tsx";
import styles from "./CartPage.module.scss"


function CartPage() {
    const { isLoggedIn } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
        }
    },[isLoggedIn])

    const [subPage, setSubpage] = useState<"cart" | "history">("cart")

    return (
        <div className={styles.bg}>
            <div className="container">
                <div className={styles.cartPage}>
                    <div>
                        <label className={styles.subPage} >
                            <input type="radio" name="page" checked={subPage === "cart"} onChange={() => setSubpage("cart")}></input>
                            <span>Корзина</span>
                        </label>
                        <label className={styles.subPage}>
                            <input type="radio" name="page" checked={subPage === "history"} onChange={() => setSubpage("history")}></input>
                            <span>История заказов</span>
                        </label>
                    </div>
                    {subPage === "cart" && <Cart/>}
                    {subPage === "history" && <History/>}
                </div>
            </div>
        </div>
    )
}

export default CartPage
