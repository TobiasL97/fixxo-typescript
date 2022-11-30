import React, { useEffect } from 'react'
import HeaderWhite from '../Sections/HeaderWhite'
import BreadCrumb from '../Sections/BreadCrumb'
import ProductGrid from '../Sections/ProductGrid'
import { IProductContextType, ProductContext } from '../Contexts/ProductContext'

const Products: React.FC = () => {

    const { products, getProducts } = React.useContext(ProductContext) as IProductContextType;

    useEffect(() => {
        getProducts()
      }, [])

  return (
    <>
        <HeaderWhite />
        <BreadCrumb page="/products" pageName="Products"/>
        <ProductGrid title="Products" products={products}/>
    </>
  )
}

export default Products