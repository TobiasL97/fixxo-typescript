import React, { useEffect} from 'react'
import { HandleProductsContext, IHandleProductsContext } from '../Contexts/HandleProductsContext'
import { Product } from '../Models/ProductsModel'

const ProductsList: React.FC = () => {

    const { products, getAll, remove, editProduct } = React.useContext(HandleProductsContext) as IHandleProductsContext

    useEffect(() => {
        getAll()
    }, [getAll])



  return (
    <>
    <h3 className="display-6 mb-4">List of Products</h3>
        {
            products.map((product: Product) => (<div key={product.articleNumber} className="productlist-details"><span className="productlist-name">Name: {product.name}</span> <span className="productlist-price">Price: ${product.price}</span><span className="productlist-tag">Tag: {product.tag}</span><i onClick={() => editProduct(product.articleNumber)} id="productlist-edit" className="fa-solid fa-pen"></i><i onClick={() => remove(product.articleNumber)} className="fa-solid fa-trash-can productlist-delete"></i></div>))
        }
    </>
  )
}

export default ProductsList