export interface IProduct {
    title: string,
    description: string,
    manufacturer?: string,
    price: number,
    img: string,
    id?: string,
    _id?: string
}

export interface IProductInCart extends IProduct {
    count?: number
}