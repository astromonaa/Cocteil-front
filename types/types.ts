export interface IReview {
    id: number;
    name: string;
    date: string;
    img: string;
    grade: number;
    text: string;
}

export interface ICategory {
    id: number
    name: string
    SubCategories?: Category[]
}

export interface INotification {
    success: boolean;
    message: string;
    id?: number;
  }

export interface IUser {
    id: number
    role: string
    email: string
    isActivated: boolean
    accessToken: string
    refreshToken: string
}

export interface IProductData {
    name: string;
    description: string;
    price: number|string;
    rating: number | string;
    sizes: number[] | string[];
    CategoryId: number | string;
    SubCategoryId: number | string | null;
    colors: string[]
    files: [] | File[];
}



export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    rating: number
    images: string[]
    sizes: number[]
    colors: string[]
    createdAt: string
    updatedAt: string
    CategoryId: number
    SubCategoryId: number
    Category: Category
    SubCategory: SubCategory
    isInCart: boolean
    favorite: boolean
}

export interface Category {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

export interface SubCategory {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    CategoryId: number
}


export interface ISize {
    size: number
    sign: string | undefined
}

export enum EUserRoles {
    USER='USER',
    ADMIN='ADMIN'
}