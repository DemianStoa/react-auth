import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        username: "",
        password: "",
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login:(state, action) => {
            
            state.user.username = action.payload.username
            state.user.password = action.payload.password
            
        },
        logout:(state) => {
            state.user.username = ""
            state.user.password = ""
        }
    }
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer