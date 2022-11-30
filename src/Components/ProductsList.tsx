import React, { useEffect } from 'react'
import { HandleProductsContext, IHandleProductsContext } from '../Contexts/HandleProductsContext'
import { Product } from '../Models/ProductsModel'

const ProductsList: React.FC = () => {

    const { products, getAll, remove } = React.useContext(HandleProductsContext) as IHandleProductsContext

    useEffect(() => {
        getAll()
    }, [getAll])

  return (
    <>
    <h3 className="display-6 mb-4">List of Products</h3>
        {
            products.map((product: Product) => (<div onClick={() => remove(product.articleNumber)} key={product.articleNumber} className="mb-3">{product.name}: ${product.price}</div>))
        }
    </>
  )
}

export default ProductsList