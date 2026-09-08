import Arrow from "./inner components/arrow/Arrow.tsx";
import Cards from "./inner components/cards/Cards.tsx";
import styles from "./Carousel.module.scss"
import type {Product} from "../../../../dtos/Product.ts";
import useEmblaCarousel from "embla-carousel-react";
import {useEffect, useState} from "react";
import {getAllProductsWithLabelRequest} from "../../api/Home.ts";



function Carousel({label}: {label: string}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProductsWithLabelRequest(label)
            .then(setProducts)
            .catch((err) => console.error(err));
    }, [label]);

    return (
        <div className={styles.carousel}>
            <Arrow isForward={false} isDisabled={false} onClick={() => emblaApi?.scrollPrev()}/>
            <Cards toShow={products} emblaRef={emblaRef}/>
            <Arrow isForward={true} isDisabled={false} onClick={() => emblaApi?.scrollNext()}/>
        </div>
    )
}

export default Carousel
