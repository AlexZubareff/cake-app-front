export interface IProduct {
    title?: string,
    description?: string,
    manufacturer?: string,
    price?: number,
    img?: string,
    id?: string,
    _id?: string,
    type?: string
}

export interface IProductInCart extends IProduct {
    count?: number
}