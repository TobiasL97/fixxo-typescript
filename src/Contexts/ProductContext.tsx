import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '../Models/ProductsModel'

export interface IProductContextType {
    product: {}
    products: Product[]
    featuredProducts: Product[]
    twoFor29Products: Product[]
    twoFor49Products: Product[]
    reactedProducts: Product[]
    relatedProducts: Product[]
    bestSellingProducts: Product[]
    saleFeaturedProducts: Product[]
    getProduct: (articleNumber: string) => void
    getProducts: () => void
    getFeaturedProducts: (take: number) => void
    getTwoFor29Products: (take: number) => void
    getTwoFor49Products: (take: number) => void
    getReactedProducts: (take: number) => void
    getBestSellingProducts: (take: number) => void
    getRelatedProducts: (take: number) => void
    getSaleFeaturedProducts: (take: number) => void
    setProduct: React.Dispatch<any>
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setFeaturedProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setTwoFor29Products: React.Dispatch<React.SetStateAction<Product[]>>
    setTwoFor49Products: React.Dispatch<React.SetStateAction<Product[]>>
    setReactedProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setRelatedProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setBestSellingProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setSaleFeaturedProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export interface ProductProviderProps {
    children: ReactNode
}

export const ProductContext = createContext<IProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

 //http://localhost:5000/api/products
 //https://win22-webapi.azurewebsites.net/swagger/index.html

    const ProductProvider = ({children}: ProductProviderProps) => {
    const url = 'http://localhost:5000/api/products'
    const [product, setProduct] = useState<Product>({tag: "", articleNumber: "", name: "", description: "", category: "", rating: 0, price: 0, imageName: ""})
    const [products, setProducts] = useState<Product[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
    const [twoFor29Products, setTwoFor29Products] = useState<Product[]>([])
    const [twoFor49Products, setTwoFor49Products] = useState<Product[]>([])
    const [reactedProducts, setReactedProducts] = useState<Product[]>([])
    const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([])
    const [saleFeaturedProducts, setSaleFeaturedProducts] = useState<Product[]>([])
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

    const getProduct = async (articleNumber: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${url}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let baseurl = `${url}/featured`

        if (take !== 0) {
            baseurl += `/${take}`
        }
        const res = await fetch(baseurl)
        setFeaturedProducts(await res.json())
        
    }

    const getTwoFor29Products = async (take = 0) => {

        let baseurl = `${url}/29`

        if (take !== 0) {
            baseurl += `/${take}`
        }
        const res = await fetch(baseurl)
        setTwoFor29Products(await res.json())
    }

    const getTwoFor49Products = async (take = 0) => {
        let baseurl = `${url}/49`

        if (take !== 0) {
            baseurl += `/${take}`
        }
        const res = await fetch(baseurl)
        setTwoFor49Products(await res.json())
    }

    const getReactedProducts = async (take = 0) => {
        let baseurl = `${url}/reacted`

        if (take !== 0) {
            baseurl += `/${take}`
        }
        const res = await fetch(baseurl)
        setReactedProducts(await res.json())
    }

    const getBestSellingProducts = async (take = 0) => {
        let baseurl = `${url}/best-selling`

        if (take !== 0) {
            baseurl += `/${take}`
        }

        const res = await fetch(baseurl)
        setBestSellingProducts(await res.json())
    }

    const getSaleFeaturedProducts = async (take = 0) => {
        let baseurl = `${url}/featured`

        if (take !== 0) {
            baseurl += `/${take}`
        }

        const res = await fetch(baseurl)
        setSaleFeaturedProducts(await res.json())
    }

    const getRelatedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setRelatedProducts(await res.json())
    }

    return <ProductContext.Provider value={{product, getProduct, products, getProducts, featuredProducts, getFeaturedProducts, twoFor29Products, getTwoFor29Products, twoFor49Products, getTwoFor49Products, reactedProducts, getReactedProducts, relatedProducts, getRelatedProducts, bestSellingProducts, getBestSellingProducts, saleFeaturedProducts, getSaleFeaturedProducts, setSaleFeaturedProducts, setBestSellingProducts, setProduct, setProducts, setFeaturedProducts, setTwoFor29Products, setTwoFor49Products, setReactedProducts, setRelatedProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider