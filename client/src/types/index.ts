import React from "react"

export interface appProps{
    children:React.ReactNode
}

export interface SignUpInfo{
    name?:string | null;
    email:string | null;
    password?:string |null;
    profilePicture?:string | null;
    otp?:string|null
}

export interface productDetails{
    _id?:string |null
    name?:string | null;
    price?:number | null;
    description?:string | null;
    image?:string | null;
    category?:string | null;
    rating?:number | null;
    stock?:number | null;
    reviews:[],
}


export interface userDetails{
    _id?:string |null
    name?:string | null;
    email?:string | null;
    phoneNumber?:string | null
    address?:string |null
    role?: "user" | "admin" 
    isVerified?:boolean | null
    isBlocked?:boolean | null
    profilePicture?:string | null
    searchHistory?:string[] | null
    cart?:productDetails[] | null
    wishlist?:productDetails[] | null
    orders?:productDetails[] | null
}


