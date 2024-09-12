import { IProductInCart } from "./product";

export interface IOrder {
    _id?: string,
    userId?: string,
    order?: IProductInCart[],
    productCount: string,
    productCoast: string,
    createdAt?: string,
    updatedAt?: string
}