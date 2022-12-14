import React from 'react'
import ProductsForm from '../Components/ProductsForm'
import ProductsList from '../Components/ProductsList'
import ProductsUpdateForm from '../Components/ProductsUpdateForm'
import { HandleProductsContext, IHandleProductsContext } from '../Contexts/HandleProductsContext'
import HeaderWhite from '../Sections/HeaderWhite'

const HandleProducts: React.FC = () => {

  const { product, getAll } = React.useContext(HandleProductsContext) as IHandleProductsContext

  return (
    <>
      <div className="container">
        <HeaderWhite />
        <ProductsForm />
        <ProductsList />
        <ProductsUpdateForm />
      </div>
    </>
  )
}

export default HandleProducts