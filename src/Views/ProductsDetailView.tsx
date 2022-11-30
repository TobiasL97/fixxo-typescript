import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderWhite from '../Sections/HeaderWhite'
import BreadCrumb from '../Sections/BreadCrumb'
import ProductDetail from '../Components/ProductDetail'
import ProductDescription from '../Components/ProductDescription'
import { ProductContext ,IProductContextType } from '../Contexts/ProductContext'
import ProductGrid from '../Sections/ProductGrid'
import Footer from '../Sections/Footer'

const ProductsDetailView: React.FC = () => {

    const { relatedProducts, getRelatedProducts } = React.useContext(ProductContext) as IProductContextType;

    useEffect(() => {
        getRelatedProducts(4)
      }, [])


  return (
    <>
        <HeaderWhite />
        <div className="product-detail-container">
            <div className="container-small">
                <p>Get 25% OFF at the Fixxo Selection - <NavLink to="/products" className="shop-now">Shop now!</NavLink></p>
                <BreadCrumb page="/ProductDetailsView" pageName="Product Detail"/>
                <ProductDetail />
                <ProductDescription />
                <ProductGrid title="Related Products" products={relatedProducts}/>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default ProductsDetailView