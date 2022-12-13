import React from 'react'
import { IHandleProductsContext, HandleProductsContext } from '../Contexts/HandleProductsContext'

const ProductsUpdateForm: React.FC = () => {
  
  const { product, setProduct, update, clearFields} = React.useContext(HandleProductsContext) as IHandleProductsContext


  

    

  return (
    <form onSubmit={update} className="mb-5">
      <h3 className="display-6 mb-4">Update Product</h3>
      <input type="hidden" value={product.articleNumber}></input>
      <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name..."></input>
      <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product description..."></input>
      <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category..."></input>
      <input value={product.price} onChange={(e) => setProduct({...product, price: parseInt(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder="Enter product price..."></input>
      <input value={product.rating} onChange={(e) => setProduct({...product, rating: parseInt(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder="Enter product rating..."></input>
      <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter a image-url"></input>
      <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter a tag"></input>
      <div className="updateform-buttons">
        <button type="submit" className="btn btn-success py-2 mt-3">UPDATE PRODUCT</button>
        <button type="button" onClick={clearFields} className="btn btn-danger py-2 mt-3 ms-3">CLEAR FIELDS</button>
      </div>
    </form>
  )
}

export default ProductsUpdateForm