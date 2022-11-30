import React from 'react'
import { ShoppingCartContext, IShoppingCartContextType } from '../Contexts/shoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'
import { CartItem } from '../Models/CartModel'

const ShoppingCart: React.FC = () => {

  const { items } = React.useContext(ShoppingCartContext) as IShoppingCartContextType;
  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            {
              items.map((item: CartItem) => (<ShoppingCartItem  key={item.articleNumber} item={item} />))
            }
        </div>
    </div>
  )
}

export default ShoppingCart