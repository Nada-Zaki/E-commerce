import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState : {       
        token:null,
        loginLoading:false,
        loginError:""
    },
    reducers: {
        loginReducer(state, action) {
            state.token = action.payload.token;
            state.loginLoading = action.payload.loginLoading;
            state.loginError = action.payload.loginError;
        },
        logoutReducer(state, action) {
            state.token = action.payload.token;
            state.loginLoading = action.payload.loginLoading;
            state.loginError = action.payload.loginError;
        }
    }   
});



export const authActions = authSlice.actions;

export default authSlice.reducer;