import { Product } from "./ProductsModel";


export interface CartItemProps {
    item: CartItem
}

export interface CartItem {
    quantity: number;
    articleNumber: any;
    product: Product
}


