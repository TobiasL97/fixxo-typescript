
export interface Product{
    articleNumber: any;
    name: string;
    description?: string;
    category: string;
    price: number;
    rating?: number;
    imageName?: string;
}

export interface ProductGridProps {
    products: Product[]
    title: string;
}

export interface ProductProps {
    product: any
}

export interface ProductRequest {
    name: string;
    description?: string;
    category: string;
    price: number;
    rating?: number;
    imageName?: string;
}
