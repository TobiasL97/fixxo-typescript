import React, { useEffect } from 'react'
import ButtonThemeLight from '../Components/ButtonThemeLight'
import SaleProductGrid from '../Components/SaleProductGrid'
import { IProductContextType, ProductContext } from '../Contexts/ProductContext'


const Sale: React.FC = () => {

  const { reactedProducts, bestSellingProducts, saleFeaturedProducts, getSaleFeaturedProducts, getReactedProducts, getBestSellingProducts} = React.useContext(ProductContext) as IProductContextType;

  useEffect(() => {
    getReactedProducts(4)
    getBestSellingProducts(4)
    getSaleFeaturedProducts(4)
  }, [getReactedProducts])

  return (
    <section className="sale container-small">
        <div className="sale-content flex c-center">
            <div className="sale-text">
                <h1>Up to 70% off*</h1>
                <p>Women's, Men's & kids' Winter Fashion</p>
                <ButtonThemeLight text="FLASH SALE" link="/products"/>
            </div>
        </div>

        <div className="sale-grid grid">
          <SaleProductGrid products={saleFeaturedProducts} title="Featured Products"/>
          <SaleProductGrid products={bestSellingProducts} title="Best Selling Products" />
          <SaleProductGrid products={reactedProducts} title="Top Reacted Products" />


        </div>
    </section>
  )
}

export default Sale