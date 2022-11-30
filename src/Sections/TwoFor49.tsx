import React from 'react'
import Offer from '../Components/Offer'
import ProductBox from '../Components/ProductBox'
import { ProductGridProps } from '../Models/ProductsModel'

const TwoFor49:React.FC<ProductGridProps> = ({title, products = []}) => {
  return (
    <section className="shopping-grid-2-for-49 container">
        <Offer OfferHeadLine={title}/>
        <div className="product-grid grid">
          {
            products.map(product => <ProductBox key={product.articleNumber} product={product}/>)
          }
        </div>
    </section>
  )
}

export default TwoFor49