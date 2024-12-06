import {db} from '../data/db.js'
import {Guitar, CartItem} from "../types" 

// Constantes
const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

// Actions
export type CartActions = 
    {type: 'add-to-cart', payload: {item: Guitar}} |
    {type: 'remove-from-cart', paylod: {id: Guitar['id']}} |
    {type: 'decrease-quantity', paylod: {id: Guitar['id']}} |
    {type: 'increase-quantity', paylod: {id: Guitar['id']}} |
    {type: 'clear-cart'} 

// Type State
export type CartState = {
    data: Guitar[]
    cart: CartItem[]
}

// Initial State
export const initialState : CartState = {
    data: db,
    cart: []
}

// Reducer
export const cartReducer = (
    state : CartState = initialState,
    action: CartActions
    ) => {
    if(action.type === 'add-to-cart') {
        const itemExist = state.cart.findIndex( guitar => guitar.id === action.payload.item.id)
        let updatedCart: CartItem[] = []

        if(itemExist >= 0)  {
            if(state.cart[itemExist].quantity >=  MAX_ITEMS) return
            updatedCart = [...state.cart]
            updatedCart[itemExist].quantity ++
        } else {
            const newItem : CartItem = {...action.payload.item, quantity: 1}
            updatedCart = [...state.cart, newItem]
        }
        return {
            ...state,
            cart: updatedCart
        }
    }
    if(action.type === "remove-from-cart") {
        return {
            ...state
        }
    }
    if(action.type === "decrease-quantity") {
        return {
            ...state
        }
    }
    if(action.type === "increase-quantity") {
        return {
            ...state
        }
    }
    if(action.type === "clear-cart") {
        return {
            ...state
        }
    }
}