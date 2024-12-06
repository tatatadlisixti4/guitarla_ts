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