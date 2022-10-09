import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "../utils/config";
import CookieHelper from "../utils/helper/CookieHelper";
import { postData } from "../utils/helper/helper";

const name = "auth";

export interface AuthState{
    isAuthed: boolean,
    user: {
        email: string,
        token: string,
        roles: string[],    
    },
    isLoading: boolean;
}

const initialState:AuthState = {
    isAuthed: false,
    user: {
        email: "",
        token: "",
        roles: [],
    },
    isLoading: true
}

export interface Credintials{
    email: string;
    password: string;
    firstname?: string;
    lastname?: string;
}

export interface CredintialsWrapperWithLoginStatus{
    isLogin: boolean;
    credintials: Credintials
}

export const getAuthData = createAsyncThunk(
    "auth/getAuthData",
    (payload:CredintialsWrapperWithLoginStatus)=>{
        return postData(`${SERVER_URL}/auth/${payload.isLogin ? "login" : "signup"}`, payload.credintials);
    }
);

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
        getDataFromCookies: (state:AuthState)=>{
            const cookieHelper = CookieHelper.getCookieHelper();
            const token = cookieHelper.getCookieValueByName("token");
            state.isLoading = false;
            
            if(!token) return;

            const email = cookieHelper.getCookieValueByName("email");
            const rolesCookie:string = cookieHelper.getCookieValueByName("roles");
            state.user.roles = rolesCookie ? rolesCookie.split(",") : [];
            state.user.token = token;
            state.isAuthed = true;
        }
    },
    extraReducers(builder){
        builder.addCase(getAuthData.fulfilled, (state, action)=>{
            state.isLoading = false;
            const cookieHelper = CookieHelper.getCookieHelper();
            const {payload} = action;
            
            cookieHelper.setCookiesFromObject(payload);
            state.user.email = payload.email;
            state.user.token = payload.token;
            state.user.roles = payload.roles;
            state.isAuthed = true;
        });

        builder.addCase(getAuthData.pending, (state, action)=>{
            console.log("loading");
            state.isLoading = true;
        });

        builder.addCase(getAuthData.rejected, (state, action)=>{
            console.log("rejected");
            state.isLoading = false;
        });
    }
})

export default authSlice.reducer;

export const { getDataFromCookies } = authSlice.actions;