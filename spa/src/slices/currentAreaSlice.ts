import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "../utils/config";
import { getData } from "../utils/helper/helper";
import { Area } from "./areaSlice";

const name = "currentArea"

export interface Camera{
    id:number;
    url:string;
    hasCrime:boolean;
}

export interface CurrentArea extends Area{
    cameras:Camera[]
}

export interface CurrentAreaState{
    currentArea:CurrentArea;
    isLoading:boolean;
}

const initialState:CurrentAreaState = {
    currentArea:{
        id: 0,
        name: "",
        image: "",
        location: "",
        cameras: [],
        hasCrime: false,
    },
    isLoading: false
};

export const getCurrentAreaDetails = createAsyncThunk("area/getCurrentAreaDetails", async (currentAreaName:string, {getState})=>{
    const state:any = getState();
    return getData(`${SERVER_URL}/api/area/${currentAreaName}`, state.auth.user.token);
});

const currentAreaSlice = createSlice({
    name,
    initialState,
    reducers: {
        setCurrentArea: (state, {payload})=>{
            state.currentArea = payload;
        }

    },
    extraReducers(builder){
        builder.addCase(getCurrentAreaDetails.fulfilled, (state, {payload})=>{
            state.isLoading = false;
            state.currentArea = payload;
        });
        builder.addCase(getCurrentAreaDetails.pending, (state, {payload})=>{
            state.isLoading = true;
        })
        builder.addCase(getCurrentAreaDetails.rejected, (state, {payload})=>{
            state.isLoading = false;
        })

    }
})

export const {setCurrentArea} = currentAreaSlice.actions;
export default currentAreaSlice.reducer;