import React from 'react'
import ProductBox from '../Components/ProductBox'
import { ProductGridProps } from '../Models/ProductsModel'



const ProductGrid: React.FC<ProductGridProps> = ({title, products = []}) => {

  return (
    <section className="product-grid">
        <h1>{title}</h1>
        <div className="container-small grid">
            {
              products.map(product => <ProductBox key={product.articleNumber} product={product}/>)
            }
        </div>
    </section>
  )
}

export default ProductGrid