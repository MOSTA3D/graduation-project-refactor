import { createSlice } from "@reduxjs/toolkit";


const initialState = {isLoading: false};
const name = "loading";

const loadingSlice = createSlice({
    name,
    initialState,
    reducers: {
        setLoading: (state)=>{
            console.log("state before is " + state.isLoading);
            // const {isLoading} = state;
            state.isLoading = true;
        },
        unsetLoading: (state)=>{
            console.log("state before is " + state.isLoading);
            state.isLoading = false;
        }
    }
})

export const {setLoading, unsetLoading} = loadingSlice.actions;
export default loadingSlice.reducer;