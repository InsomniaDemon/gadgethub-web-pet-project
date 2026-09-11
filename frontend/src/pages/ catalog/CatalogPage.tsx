import {useAuth} from "../../shared/contexts/AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import styles from "./CatalogPage.module.scss"
import Products from "./components/products/Products.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";


function CatalogPage() {
    const { isLoggedIn } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
        }
    },[isLoggedIn])

    return (
        <div className="container">
            <div className={styles.catalog}>
                <h1>Каталог товаров</h1>
                Новые
                Популярные
                Подешевле
                Подороже
                <div className={styles.wrapper}>
                    <Products/>
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage
