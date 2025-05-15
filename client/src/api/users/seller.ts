import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { productDetails } from '../../types'

export const sellerApi =  createApi({
    reducerPath:'sellerApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/seller/",
        credentials:'include'
    }),
    tagTypes:['Seller'],
    endpoints:(builder)=>({
        getProducts:builder.query<productDetails,Partial<productDetails>>({
            query:(id)=> `/product/${id}`,
            
        }),
        addProduct:builder.mutation({
            query:({id,body})=>({
                url:`/product/${id}`,
                method:'POST',
                body
            })
        }),
        uploadImage:builder.mutation({
            query:(body)=>({
                url:'/upload',
                method:'POST',
                body
            })
        }),
        reviewProduct:builder.query({
           query:({id,sellerId})=>`/review/product/${sellerId}/${id}` 
        }),
        deleteSellerProduct:builder.mutation({
            query:({id,sellerId})=>({
                url:`/product/${sellerId}/${id}`,
                method:'DELETE'
            })
        }),
        deleteImagePublicId:builder.mutation({
            query:(body)=>({
                url:'delete-image-id',
                method:"POST",
                body
            })
        }),
        updateProduct:builder.mutation({
            query:({id,sellerId,body})=>({
                url:`/product/${sellerId}/${id}`,
                method:'PUT',
                body
            })
        })

    })
})

export const {useGetProductsQuery,useAddProductMutation,useUploadImageMutation,useReviewProductQuery,useDeleteSellerProductMutation,useDeleteImagePublicIdMutation, useUpdateProductMutation} = sellerApi