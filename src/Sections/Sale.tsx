import React, { useEffect } from 'react'
import ButtonThemeLight from '../Components/ButtonThemeLight'
import SaleProductGrid from '../Components/SaleProductGrid'
import { IProductContextType, ProductContext } from '../Contexts/ProductContext'


const Sale: React.FC = () => {

  const { saleProducts, getSaleProducts} = React.useContext(ProductContext) as IProductContextType;

  useEffect(() => {
    getSaleProducts(4)
  }, [])

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
            <SaleProductGrid products={saleProducts} title="Featured Products"/>
            <SaleProductGrid products={saleProducts} title="Best Selling Products" />
            <SaleProductGrid products={saleProducts} title="Top Reacted Products" />


        </div>
    </section>
  )
}

export default Sale