import {db} from '../data/db.js'
import {Guitar, CartItem} from "../types" 

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
        return {
            ...state
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