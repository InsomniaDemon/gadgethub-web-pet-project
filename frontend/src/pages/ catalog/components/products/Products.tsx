import type {Product} from "../../../../dtos/Product.ts"
import GoodsCardWrapper from "./inner components/goods card wrapper/GoodsCardWrapper.tsx"
import styles from "./Products.module.scss"
import {useEffect, useMemo, useState} from "react"
import PagesButtons from "./inner components/PagesButtons/PagesButtons.tsx"
import {getPages} from "./utils/Pagination.ts"
import Arrow from "../../../../shared/arrow/Arrow.tsx";
import {getAllProductsRequest} from "../../api/Catalog.ts";
import {getAllProductsWithLabelRequest} from "../../../home/api/Home.ts";
import {sortAsc, sortBestseller, sortDesc, sortNew} from "./utils/Sorts.ts";

const CARDS_PER_PAGE = 9

function Products({sortType}: {sortType: number}) {
    const [products, setProducts] = useState<Product[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getAllProductsRequest()
            .then(setProducts)
            .catch((err) => console.error(err));
    }, [])

    const sortedProducts = useMemo(() => {
        switch (sortType) {
            case 1:
                return sortNew(products);
            case 2:
                return sortBestseller(products);
            case 3:
                return sortAsc(products);
            case 4:
                return sortDesc(products);
            default:
                return products
        }
    }, [products, sortType]);

    const totalPages = Math.ceil(products.length / CARDS_PER_PAGE)

    const startIndex = (currentPage - 1) * CARDS_PER_PAGE
    const endIndex = startIndex + CARDS_PER_PAGE
    const currentProducts = sortedProducts.slice(startIndex, endIndex)

    return (
        <div className={styles.wrapper}>
            <div className={styles.products}>
                {currentProducts.map(product =>
                    <GoodsCardWrapper key={product.id} product={product}/>
                )}
            </div>
            <div className={styles.pageButtons}>
                <div className={styles.leftArrow}>
                    { currentPage !== 1 && <Arrow isForward={false} onClick={() => setCurrentPage(currentPage - 1)}/>}
                </div>
                <PagesButtons currentPage={currentPage} pagesToShow={getPages(currentPage, totalPages)} onClick={setCurrentPage}/>
                <div className={styles.rightArrow}>
                    { currentPage !== totalPages && <Arrow isForward={true} onClick={() => setCurrentPage(currentPage + 1)}/>}
                </div>
            </div>
        </div>
    )
}

export default Products
