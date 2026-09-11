import type {Product} from "../../../../dtos/Product.ts"
import GoodsCardWrapper from "./inner components/goods card wrapper/GoodsCardWrapper.tsx"
import styles from "./Products.module.scss"
import {useState} from "react"
import PagesButtons from "./inner components/PagesButtons/PagesButtons.tsx"
import {getPages} from "./utils/Pagination.ts"
import Arrow from "../../../../shared/arrow/Arrow.tsx";

const CARDS_PER_PAGE = 9

function Products() {
    const [currentPage, setCurrentPage] = useState(1)

    const toShow: Product[] = [
        {
            id: 1,
            title: "ПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦАПЕРВАЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_1.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 2,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_2.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 3,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 4,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_4.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 5,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_5.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 6,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_6.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 7,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_7.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 8,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_8.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 9,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_9.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 10,
            title: "ВТОРАЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_10.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 11,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_11.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 12,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_12.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 13,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_13.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 14,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_14.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 15,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_15.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 16,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_16.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 17,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_17.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 18,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_18.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 19,
            title: "ТРЕТЬЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_19.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 20,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_20.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 21,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_21.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 22,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_22.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 23,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_23.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 24,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_24.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 25,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_25.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 26,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 27,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 28,
            title: "ЧЕТВЕРТАЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 29,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 30,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 31,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 32,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 33,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 34,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 35,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 36,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 37,
            title: "ПЯТАЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 38,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 39,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 40,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 41,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 42,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 43,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 44,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 45,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 46,
            title: "ШЕСТАЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 47,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 48,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 49,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 50,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 51,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 52,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 53,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 54,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 55,
            title: "СЕДЬМАЯ СТРАНИЦА",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 56,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 57,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 58,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 59,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
        {
            id: 60,
            title: "Iphone",
            price: 1000,
            text: "",
            image: "images/goods/image_3.png",
            labels: ["new", "bestseller"],
            stars: 4.1
        },
    ]

    const totalPages = Math.ceil(toShow.length / CARDS_PER_PAGE)

    const startIndex = (currentPage - 1) * CARDS_PER_PAGE
    const endIndex = startIndex + CARDS_PER_PAGE
    const currentProducts = toShow.slice(startIndex, endIndex)

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
