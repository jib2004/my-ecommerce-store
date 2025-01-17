import express from 'express'
import { userModel } from '../../Schema/usersInfoSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateToken } from '../../middleware/otpGenerator.js'
import nodemailer from 'nodemailer'



  const authRouter = express.Router()
authRouter.post('/register', async(req,res)=>{
    const {name,email,password,phoneNumber,address,avater,role,otp,isVerified,searchHistory} = req.body
    if(!name || !email || !password ){
        return res.status(400).json({message:"Please fill all the fields"})
    }
    if(password?.length < 8) return res.status(400).json({messge:"Password too short"})
        
    const hashedPassword =  bcrypt.hashSync(password, 10)
    let hashedNumber =  ""
    if(hashedNumber){
        return    hashedNumber = bcrypt.hashSync(phoneNumber,10)
    }
    let hashedAddress =""

    if(address){
       return  hashedAddress =  bcrypt.hashSync(address,10)
    }

    try {
        const userEmail = await userModel.findOne({email})
        if(userEmail) return res.status(400).json({message:"User exists already"})
        const user = await userModel.create({
            name,
            email,
            password:hashedPassword,
            phoneNumber:hashedNumber,
            address:hashedAddress ,
            avater,
            role,
            otp,
            isVerified,
            searchHistory
        })
    
        return res.status(201).json({ 
            message:"User created successfully",
        })


    } catch (error) {
        return res.status(500).json({message:`Internal server error ${error}`})
    }

    
})

authRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password) return res.status(400).json({message:"Please fill fields"})
        try {
            const user = await userModel.findOne({email})
            if(!user) return res.status(400).json({message:"User not found"})
            const isValidPassword =  bcrypt.compareSync(password,user.password)
            if(!isValidPassword) return res.status(400).json({message:"Invalid password"})
            const token =jwt.sign({userEmail:user.email},process.env.JWT_SECRET_KEY,{expiresIn:"24h" })
            res.cookie("token",token,{
                httpOnly:true,
            }).json({message:"Successfully logged in",data:user})
        } catch (error) {
            return res.status(400).json({message:"Invalid email or password"})
        }
})


authRouter.post("/send-otp",async(req,res)=>{
    const {email} = req.body
   
    if(!email){
        return res.status(400).json({"message":'Enter your email'})
    }

    const token = generateToken()
    
try{
   
    const userEmail = await userModel.findOne({email}) 
    if(!userEmail){
        return res.status(404).json({message:"User not found"})
}

  userEmail.otp = token
  userEmail.isChangedPassword = false
  await userEmail.save()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, 
secure: true,
    auth:{
        user: process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

const info = await transporter.sendMail({
    from:`"Wonder Boy" ${process.env.EMAIL}`,
    to: email,
    subject:`OTP-password `,
    text:`This is a one-time password ${token}`
    
})
 .catch(e=>console.log(e))


    return res.status(200).json({message:"OTP sent successfully",data:userEmail})
    
}catch{
    return res.status(500).json({message:"Internal server error"})
}

    
})

authRouter.post("/verify-otp-email",async(req,res)=>{
    const {email,otp} = req.body
    try{
        const userEmail = await userModel.findOne({email}) 

    if(!userEmail){
        return res.status(404).json({message:"User not found"})
    }

    if(userEmail.otp !== otp){
        return res.status(400).json({message:"Invalid OTP"})
    }

    if(userEmail.isVerified === true){
        return res.status(400).json({message:"User verified already"})
    }

    if(userEmail.otp === otp){
        const updateEmail = await userModel.findOneAndUpdate({email},{
            otp: "",
            isVerified: true
        },{new:true})
    
        if(updateEmail.isVerified){
            return res.status(200).json({message:"OTP verified successfully",data:updateEmail})
        }
    }
    }catch(e){
        return res.status(500).json({message:`Internal server error ${e}`})
    }
})


authRouter.put('/verify-otp-password',async(req,res)=>{
    const {email,otp}  = req.body
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        if(user.otp !== otp){
            return res.status(400).json({message:"Invalid OTP"})
        }
        if(user.otp === otp){
            const updateEmail = await userModel.findOneAndUpdate({email},{
                otp: "",
                isChangedPassword: true
            },{new:true}
        )
    
        if(updateEmail.isChangedPassword){
            return res.status(200).json({message:"Password changed successfully"})
        }
    }
            
    }catch(error){
        return res.status(500).json({message:`Internal server error: ${error}`})
    }
})


authRouter.put('/forgot-password',async(req,res)=>{
    const {email,password} = req.body
        if(password?.length < 8){
            return res.status(400).json({message:"Password must be at least 8 characters long"})
        }
    try {
        const newHashedPassword = bcrypt.hashSync(password,10)
        const user = await userModel.findOneAndUpdate({email},{
            password:newHashedPassword
        },{new:true})
        if(user && user.isVerified){
            return res.status(200).json({message:"Password updated successfully",data:user})
        }

    } catch (error) {
        return res.status(500).json({message:`Internal server error: ${error}`})
    }
})


authRouter.post('/google-auth',async(req,res)=>{
    const {name,email,profilePicture} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
            const token =jwt.sign({userEmail:user.email},process.env.JWT_SECRET_KEY,{expiresIn:"24h" })
            res.cookie("token",token,{
                httpOnly:true,
            }).json({message:"Successfully logged in",data:user})
        }else{
            const newUser = await userModel.create({name,email,profilePicture})
            return res.status(201).json({ 
                message:"User created successfully",
            })
        }
    } catch (error) {
        return res.status(500).json({message:`Internal server error: ${error}`})
    }
})
console.log("Wow")

export default authRouter
