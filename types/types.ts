export interface IReview {
    id: number;
    name: string;
    date: string;
    img: string;
    grade: number;
    text: string;
}

export interface Category {
    id: string
    name: string
    subcategories?: Category[]
}

