import { Guitar } from "../types" 

export type CartActions = 
    {type: 'add-to-cart', payload: {item: Guitar}} |
    {type: 'remove-from-cart', paylod: {id: Guitar['id']}} |
    {type: 'decrease-quantity', paylod: {id: Guitar['id']}} |
    {type: 'increase-quantity', paylod: {id: Guitar['id']}} |
    {type: 'clear-cart'} 

