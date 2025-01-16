import React from "react"

export interface appProps{
    children:React.ReactNode
}

export interface SignUpInfo{
    name:string | null;
    email:string | null;
    password:string;
    profilePicture?:string | null

}