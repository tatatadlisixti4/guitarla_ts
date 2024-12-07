import {useState, useEffect} from "react"
import type {CartItem} from "../types"

const useCart = () => {
    // Constantes
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    // Hooks
    const [cart] = useState(initialCart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

}

export {useCart};