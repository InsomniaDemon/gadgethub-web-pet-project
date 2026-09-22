import { createContext, useContext, useState } from "react"
import * as React from "react"
import type {Product} from "../../dtos/Product.ts";

type CartItem = {
    product: Product,
    quantity: number
}

interface CartContextType {
    items: CartItem[],
    addProduct: (product: Product) => void,
    changeProductQuantity: (product: Product, newQuantity: number) => void,
    deleteProduct: (product: Product) => void,
    clearCart: () => void,
    getProductQuantity: (product: Product) => number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({children}: {children: React.ReactNode}) {
    const [items, setItems] = useState<CartItem[]>(() => {
        const raw = localStorage.getItem("items")
        return raw ? JSON.parse(raw) : []
    })

    const addProduct = (product: Product) => {
        const updatedItems = [...items, { product, quantity: 1 }]

        localStorage.setItem("items", JSON.stringify(updatedItems))
        setItems(updatedItems)
    }

    const changeProductQuantity = (product: Product, newQuantity: number) => {
        const updatedItems = items.map((item) =>
            item.product.id === product.id ? {...item, quantity: newQuantity} : item
        )

        localStorage.setItem("items", JSON.stringify(updatedItems))
        setItems(updatedItems)
    }

    const deleteProduct = (product: Product) => {
        const updatedItems = items.filter((item) =>
            item.product.id !== product.id
        )

        localStorage.setItem("items", JSON.stringify(updatedItems))
        setItems(updatedItems)
    }

    const clearCart = () => {
        localStorage.setItem("items", "[]")
        setItems([])
    }

    const getProductQuantity = (product: Product) => {
        return items.find((item) => item.product.id === product.id)?.quantity ?? 0
    }

    return (
        <CartContext.Provider value={{items, addProduct, changeProductQuantity, deleteProduct, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}

