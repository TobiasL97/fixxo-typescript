import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '../Models/ProductsModel'

export interface IProductContextType {
    product: any
    products: Product[]
    featuredProducts: Product[]
    twoFor29Products: Product[]
    twoFor49Products: Product[]
    saleProducts: Product[]
    relatedProducts: Product[]
    getProduct: (articleNumber: any) => void
    getProducts: () => void
    getFeaturedProducts: (take: number) => void
    getTwoFor29Products: (take: number) => void
    getTwoFor49Products: (take: number) => void
    getSaleProducts: (take: number) => void
    getRelatedProducts: (take: number) => void
    setProduct: React.Dispatch<any>
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setFeaturedProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setTwoFor29Products: React.Dispatch<React.SetStateAction<Product[]>>
    setTwoFor49Products: React.Dispatch<React.SetStateAction<Product[]>>
    setSaleProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setRelatedProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export interface ProductProviderProps {
    children: ReactNode
}

export const ProductContext = createContext<IProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

    const ProductProvider = ({children}: ProductProviderProps) => {
    const url = 'http://localhost:5000/api/products'
    const [product, setProduct] = useState<any>({})
    const [products, setProducts] = useState<Product[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
    const [twoFor29Products, setTwoFor29Products] = useState<Product[]>([])
    const [twoFor49Products, setTwoFor49Products] = useState<Product[]>([])
    const [saleProducts, setSaleProducts] = useState<Product[]>([])
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

    const getProduct = async (articleNumber: any) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getTwoFor29Products = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTwoFor29Products(await res.json())
    }

    const getTwoFor49Products = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTwoFor49Products(await res.json())
    }

    const getSaleProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setSaleProducts(await res.json())
    }

    const getRelatedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setRelatedProducts(await res.json())
    }

    return <ProductContext.Provider value={{product, getProduct, products, getProducts, featuredProducts, getFeaturedProducts, twoFor29Products, getTwoFor29Products, twoFor49Products, getTwoFor49Products, saleProducts, getSaleProducts, relatedProducts, getRelatedProducts, setProduct, setProducts, setFeaturedProducts, setTwoFor29Products, setTwoFor49Products, setSaleProducts, setRelatedProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider