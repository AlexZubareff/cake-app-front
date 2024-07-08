export interface IUser {
    access_token: string;
    login: string,
    email?: string,
    password: string,
    cardNumber?: string,
    id?: string,
    _id?:string,
    role: string,
    cartId?:string
}

export const USER_LOCALSTORAGE_NAME = 'userApp';