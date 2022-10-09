import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "../utils/config";
import { getData } from "../utils/helper/helper";

const name = "area"

const initialState = {
    areas: []
}

export const getAllAreas = createAsyncThunk("area/getAllAreas", async (_e, {getState})=>{
    const state:any = getState();
    return getData(`${SERVER_URL}/api/area`, state.auth.user.token);
})

const areaSlice = createSlice({
    name,
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(getAllAreas.fulfilled, (state, {payload})=>{
            console.log(payload);
            state.areas = payload;
        })
    }
})

export default areaSlice.reducer;