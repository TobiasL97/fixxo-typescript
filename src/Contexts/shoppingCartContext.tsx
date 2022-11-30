import ShoppingCart from '../Components/shoppingCart'
import{ createContext, useContext, useState } from 'react'
import { CartItem } from '../Models/CartModel';

export interface IShoppingCartContextType {
    items: CartItem[]
    setItems: React.Dispatch<React.SetStateAction<CartItem[]>>
    cartQuantity: number
    incrementQuantity: (cartItem: CartItem) => any
    getItemQuantity: (articleNumber: string) => any
    decrementQuantity: (cartItem: CartItem) => any
    removeItem: (articleNumber: string) => void
}

interface ShoppingCartProviderProps {
    children: any
}

export const ShoppingCartContext = createContext<IShoppingCartContextType | null>(null);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {

    const [items, setItems] = useState<CartItem[]>([])

    const cartQuantity = items.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: any) => {
        return items.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: CartItem) => {
        const {articleNumber, product} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1 }]
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: CartItem) => {
        const {articleNumber} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?. quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: any) => {
        setItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{items, cartQuantity, incrementQuantity, getItemQuantity, decrementQuantity, removeItem, setItems}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;