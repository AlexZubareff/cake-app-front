import { IProductInCart } from "./product"

export interface ICart extends IProductInCart {
    _id?: string,
    userId?: string, 
    cart: IProductInCart[] | []
}


