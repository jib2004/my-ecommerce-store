import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "../../types";

const initialState:userDetails={
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
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        getUserDetails:(state,action)=>{
            state=action.payload;
        },
        setEmailForPasswordChange:(state,action)=>{
            state.email=action.payload;
        }
        
    }
    
})

export const {getUserDetails,setEmailForPasswordChange} = userSlice.actions
export default userSlice.reducer