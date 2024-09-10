import { IProductInCart } from "./product";

export interface IOrder {
    userId: string,
    order: IProductInCart[],
}