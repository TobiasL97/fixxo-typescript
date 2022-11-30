import React, { useEffect } from 'react'
import Header from '../Sections/Header'
import Promo from '../Sections/Promo'
import ShowCase from '../Sections/ShowCase'
import { ProductContext, IProductContextType } from '../Contexts/ProductContext'
import ProductGrid from '../Sections/ProductGrid'
import Promo2 from '../Sections/Promo2'
import OurSpeciality from '../Sections/OurSpeciality'
import TwoFor29 from '../Sections/TwoFor29'
import TwoFor49 from '../Sections/TwoFor49'
import Sale from '../Sections/Sale'
import CompanyService from '../Sections/CompanyService'
import Footer from '../Sections/Footer'

const HomeView: React.FC = () => {

  const { featuredProducts, getFeaturedProducts, twoFor29Products, getTwoFor29Products, twoFor49Products, getTwoFor49Products, saleProducts, getSaleProducts } = React.useContext(ProductContext) as IProductContextType;

  useEffect(() => {
    getFeaturedProducts(8)
    getTwoFor29Products(4)
    getTwoFor49Products(4)
    getSaleProducts(4)

  }, [])

  return (
    <>
      <Header />
      <ShowCase />
      <Promo />
      <ProductGrid title="Featured Products" products={featuredProducts}/>
      <Promo2 />
      <OurSpeciality />
      <TwoFor29 title="2 FOR USD $29" products={twoFor29Products}/>
      <TwoFor49 title="2 FOR USD $49" products={twoFor49Products}/>
      <Sale/>
      <CompanyService />
      <Footer />
    </>
  )
}

export default HomeView