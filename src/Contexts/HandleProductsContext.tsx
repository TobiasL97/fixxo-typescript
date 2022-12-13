import React, { createContext, useContext, useState } from 'react'
import { IHandleProductsProviderProps } from '../Models/HandleProducts'
import { Product, ProductRequest } from '../Models/ProductsModel'

export interface IHandleProductsContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    create: (e: React.FormEvent) => void
    get: (articleNumber?: any) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (articleNumber: any) => void
    editProduct: (articleNumber: string) => void
    clearFields: () => void
}

export const HandleProductsContext = createContext<IHandleProductsContext | null>(null)
export const useHandleProductsContext = () => { return useContext(HandleProductsContext) }

const HandleProductsProvider: React.FC<IHandleProductsProviderProps> = ({children}) => {

    const baseUrl = 'http://localhost:5000/api/products'
    const productDefaultValues: Product = {tag: "", articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: ''}
    const productRequestDefaultValues: ProductRequest = {name: '', description: '', category: '', price: 0, rating: 0, imageName: '', tag: ''}

    const [product, setProduct] = useState<Product>(productDefaultValues)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequestDefaultValues)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
      e.preventDefault()

      const result = await fetch(`${baseUrl}`, {

        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productRequest)
      })

      if(result.status ===201)
        setProductRequest(productRequestDefaultValues)

    }
    const get = async (articleNumber: string) => {
      const result = await fetch(`${baseUrl}/${articleNumber}`)
      if (result.status === 200) {
        setProduct( await result.json())
      }
    }

    const editProduct = async (articleNumber: string) => {
      const result = await fetch(`${baseUrl}/product/details/${articleNumber}`)
      const updatedProduct = await result.json();
      window.scrollTo(0, document.body.scrollHeight)

      setProduct(updatedProduct)
  }

    const clearFields = () => {
      setProduct(productDefaultValues)
    }

    const getAll = async () => {
      const result = await fetch(`${baseUrl}`)
      if (result.status === 200){
        setProducts(await result.json())
      }
    }

    const update = async (e: React.FormEvent) => {

      e.preventDefault()
      const result = await fetch(`${baseUrl}/${product.articleNumber}`, {

        method: 'put',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })

      if(result.status ===200) {
        setProduct(await result.json())
        setProduct(productDefaultValues)
      }
        
    }

    const remove = async (articleNumber: any) => {
      const result = await fetch(`${baseUrl}/${articleNumber}`, {

        method: 'delete',
      })

      if(result.status ===204) {
        setProduct(productDefaultValues)
      }
    }


  return (
    <HandleProductsContext.Provider value={{product, setProduct, products, productRequest, setProductRequest, create, get, getAll, clearFields, editProduct, update, remove}}>
        {children}
    </HandleProductsContext.Provider>
  )
}

export default HandleProductsProvider