import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

// interface 

const resourceLoader = (Component:React.FC<any>, stateName:string, mapStateToProps:Function, thunkAction:()=>AsyncThunkAction<any, void, {}>)=>(props:any)=>{
    // // const dispatch = useAppDispatch();
    // // const temp = useAppSelector(state=>state[stateName]);

    // // useEffect(()=>{
    // //    dispatch(thunkAction());
    // // }, []);

    // return <Component {...props} {...temp} />
}

export default resourceLoader;