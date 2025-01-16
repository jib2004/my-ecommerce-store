import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignUpInfo } from '../../types'



export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/auth/"}),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        signUp: builder.mutation<SignUpInfo,Partial<SignUpInfo>>({
            query:(body)=>({
                url:'/register',
                method:'POST',
                body
            })
        }),
        googleAuth:builder.mutation<SignUpInfo,Partial<SignUpInfo>>({
            query:(body)=>({
                url:'/google-auth',
                method:"Post",
                body
            })
        })
    })
})

export const {useSignUpMutation,useGoogleAuthMutation} =userAuthApi