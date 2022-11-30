import React from 'react'
import ProductBoxFlexed from './ProductBoxFlexed'
import { ProductGridProps } from '../Models/ProductsModel'

const SaleProductGrid: React.FC<ProductGridProps> = ({title, products = []}) => {

  return (
    <div className="sale-product-grid grid">
      <h1>{title}</h1>
      {
        products.map(product => <ProductBoxFlexed key={product.articleNumber} product={product}/>)
      }
    </div>
  )
}

export default SaleProductGrid