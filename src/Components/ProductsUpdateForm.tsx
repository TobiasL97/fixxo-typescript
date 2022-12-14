import React from 'react'
import { IHandleProductsContext, HandleProductsContext } from '../Contexts/HandleProductsContext'

const ProductsUpdateForm: React.FC = () => {
  
  const { product, setProduct, update, clearFields} = React.useContext(HandleProductsContext) as IHandleProductsContext


  

    

  return (
    <form onSubmit={update} className="mb-5">
      <h3 className="display-6 mb-4">Update Product <span className="update-product-span">(Tryck på pennan för att uppdatera produkt)</span></h3>
      <input type="hidden" value={product.articleNumber}></input>
      <div className="updateform-name">
        <label className="mb-1"><strong>Product name:</strong></label>
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name..."></input>
      </div>
      <div className="updateform-description">
        <label className="mb-1"><strong>Product description:</strong></label>
        <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product description..."></input>
      </div>
      <div className="updateform-category">
        <label className="mb-1"><strong>Product category:</strong></label>
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category..."></input>
      </div>
      <div className="updateform-Price">
        <label className="mb-1"><strong>Product price:</strong></label>
        <input value={product.price} onChange={(e) => setProduct({...product, price: parseInt(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder="Enter product price..."></input>
      </div>
      <div className="updateform-rating">
        <label className="mb-1"><strong>Product rating:</strong></label>
        <input value={product.rating} onChange={(e) => setProduct({...product, rating: parseInt(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder="Enter product rating..."></input>
      </div>
      <div className="updateform-image">
        <label className="mb-1"><strong>Product image-url:</strong></label>
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter a image-url"></input>
      </div>
      <div className="updateform-tag">
        <label className="mb-1"><strong>Product tag:</strong></label>
        <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter a tag"></input>
      </div>
      <div className="updateform-buttons">
        <button type="submit" className="btn btn-success py-2 mt-3">UPDATE PRODUCT</button>
        <button type="button" onClick={clearFields} className="btn btn-danger py-2 mt-3 ms-3">CLEAR FIELDS</button>
      </div>
    </form>
  )
}

export default ProductsUpdateForm