import type {Product} from "../../../dtos/Product.ts";
import {API_URL} from "../../../main.tsx";

const BASE_URL = `${API_URL}`;

export async function getAllProductsRequest(): Promise<Product[]> {
    const path = `/products`

    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`)
    }

    return await response.json();
}

export async function getMaxPrice(): Promise<number> {
    const path = `/products/max-price`

    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch maxPrice: ${response.status}`)
    }

    return await response.json();
}