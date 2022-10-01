import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "../utils/config";
import CookieHelper from "../utils/helper/CookieHelper";
import { postData } from "../utils/helper/helper";

const name = "auth";

export interface AuthState{
    email:string;
    token:string;
    roles:string[];
}

interface AuthKeys{
    email:string;
    token:string;
    roles:string;
}

const initialState:AuthState = {
    email: "",
    token: "",
    roles: []
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
        console.log(payload);
        return postData(`${SERVER_URL}/auth/${payload.isLogin ? "login" : "signup"}`, payload.credintials);
    }
);

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
        getDataFromCookies: (state:any)=>{
            const cookieHelper = CookieHelper.getCookieHelper();
            // Object.keys(state).forEach((k:string)=>{
            //     console.log(k);
            //     (state[k] as any) = cookieHelper.getCookieValueByName(k) as any;
            // })
            state.email = cookieHelper.getCookieValueByName("email");
            state.token = cookieHelper.getCookieValueByName("token");
            const rolesCookie:string = cookieHelper.getCookieValueByName("roles");
            state.roles = rolesCookie ? rolesCookie.split(",") : [];
        }
    },
    extraReducers(builder){
        builder.addCase(getAuthData.fulfilled, (state, action)=>{
            const cookieHelper = CookieHelper.getCookieHelper();
            const {payload} = action;
            cookieHelper.setCookiesFromObject(payload);
            console.log("doesn't get here");
            state.email = payload.email;
            state.token = payload.token;
            state.roles = payload.roles;
        });

        builder.addCase(getAuthData.pending, (state, action)=>{
            console.log("loading");
            // state = action.payload;
        });

        builder.addCase(getAuthData.rejected, (state, action)=>{
            console.log("rejected");
            // state = action.payload;
        });
    }
})

export default authSlice.reducer;

export const { getDataFromCookies } = authSlice.actions;