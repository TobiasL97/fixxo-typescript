import React from 'react'
import { IHandleProductsContext, HandleProductsContext } from '../Contexts/HandleProductsContext'

const ProductsForm: React.FC = () => {

    const { productRequest, setProductRequest, create } = React.useContext(HandleProductsContext) as IHandleProductsContext

  return (
    <form onSubmit={create} className="products-form">
        <h3 className="display-6 mb-4">Create Product</h3>
        <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name..."></input>
        <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product description..."></input>
        <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category..."></input>
        <input value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: parseInt(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder="Enter product price..."></input>
        <input value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: parseInt(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder="Enter product rating..."></input>
        <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter image-url"></input>
        <button type="submit" className="btn btn-success py-2 mt-3">CREATE PRODUCT</button>
    </form>
  )
}

export default ProductsForm