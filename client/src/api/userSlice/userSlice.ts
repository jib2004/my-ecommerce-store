import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "../../types";

const initialState:userDetails={
    _id:'',
    name:'',
    email:'',
    phoneNumber:'',
    address:'',
    profilePicture:"",
    role:"user",
    isVerified:false,
    isBlocked:false,
    searchHistory:[],
    cart:[],
    wishlist:[],
    orders:[],
    message:''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        getUserDetails:(state,action)=>{
           return state = action.payload;
        },
        setEmailForPasswordChange:(state,action)=>{
           return  state.email=action.payload;
        },
        logout:()=>{
            return initialState;
        }
        
    }
    
})

export const {getUserDetails,setEmailForPasswordChange,logout} = userSlice.actions
export default userSlice.reducer