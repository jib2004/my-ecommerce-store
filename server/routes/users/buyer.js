import express from 'express'
import { verify } from '../../middleware/verify.js'
import { productModel } from '../../Schema/productDetailSchema.js'
import { userModel } from '../../Schema/usersInfoSchema.js'


export const buyerRoute =  express.Router()

buyerRoute.get('/product',verify,async(req,res)=>{
    try {
        const products =await productModel.find()
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found." });
        }
        return res.status(200).json({data:products,message:"Successful"})
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

buyerRoute.get('/product/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const products = await productModel.findById(id)
        if (!products) {
            return res.status(404).json({ message: "Product not found." });
        }
        return res.status(200).json({data:products,message:"Successful"})
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error " + error
        })
    }
})

buyerRoute.put('/cart/:id',verify,async(req,res)=>{
    const {id} = req.params
   const {addCart} = req.body 
   if(!addCart){
        res.status(400).json({
            message:"Please add product to cart"
        })
   }
    try {
        const user = await userModel.findByIdAndUpdate(id,{
            $push:{
                cart:addCart
            }
        },{
            new:true
        })
        
        return res.status(200).json({
            message:"Product added to cart successfully",
            data:user
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error " + error
        })
    }
})


buyerRoute.put('/wishlist/:id',verify,(req,res)=>{
    const {id} = req.params
   const {addWishlist} = req.body
   if(!addWishlist){
    res.status(400).json({
        message:"Please add product to wishlist"
    })
}

   try {
    const user = userModel.findByIdAndUpdate(id,{
        $push:{
            wishlist:addWishlist
        }
    },{new:true})

    return res.status(200).json({
        message:"Product added to cart successfully",
        data:user
    })
   } catch (error) {
    res.status(500).json({
        message:"Internal Server Error " + error
    })
   }
})



