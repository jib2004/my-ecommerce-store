import {Schema,model} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        // required:true,
        min:8
    },
    phoneNumber:{
        type:String,
        // required:true,
        default:"",
        max:11
    },
    address:{
        type:String,
        default:""
    },
    avatar:{
        type:String,
        default:"default.jpg"
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    otp:{
        type:String,
        default:""
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    searchHistory:{
        type:Array,
        default:[],
    },
    cart:{
        type:Array,
        default:[],
    },
    wishlist:{
        type:Array,
        default:[],
    },
    profilePicture:{
        type:String,
        default:"default.jpg"
    }

},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})


export const userModel = model('users',userSchema)