import {useAuth} from "../../shared/contexts/AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./CatalogPage.module.scss"
import Products from "./components/products/Products.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";


function CatalogPage() {
    const { isLoggedIn } = useAuth()
    const [sortType, setSortType] = useState(1)
    const [colours, setColours] = useState([])
    const [types, setTypes] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
        }
    },[isLoggedIn, navigate])

    return (
        <div className="container">
            <div className={styles.catalog}>
                <h1>Каталог товаров</h1>
                <div className={styles.buttons}>
                    <button onClick={() => setSortType(1)} className={sortType === 1 ? styles.selected : undefined}>Новые</button>
                    <button onClick={() => setSortType(2)} className={sortType === 2 ? styles.selected : undefined}>Популярные</button>
                    <button onClick={() => setSortType(3)} className={sortType === 3 ? styles.selected : undefined}>Подешевле</button>
                    <button onClick={() => setSortType(4)} className={sortType === 4 ? styles.selected : undefined}>Подороже</button>
                </div>
                <div className={styles.wrapper}>
                    <Products sortType={sortType}/>
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage
