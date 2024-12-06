import {useState, useEffect} from "react"
import type {Guitar, CartItem} from "../types"

const useCart = () => {
    // Constantes
    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    // Hooks
    const [cart, setCart] = useState(initialCart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Funciones
    function increaseQuantity(id : Guitar['id']) {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })
        setCart(updatedCart);
    }

    function decreaseQuantity(id : Guitar['id']) {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {...item, quantity: item.quantity - 1}
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    
    // Return
    return {
        increaseQuantity,
        decreaseQuantity,
        clearCart
    }
}

export {useCart};