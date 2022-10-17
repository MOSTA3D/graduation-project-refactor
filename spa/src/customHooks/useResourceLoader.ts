import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

function useResourceLoader<T>(resourceName:(keyof RootState), thunkAction:any, dependencies:string[]):T{

    const dispatch = useAppDispatch();

    const data:T = useAppSelector(state=>state[resourceName]) as unknown as T;

    useEffect(()=>{
        dispatch(thunkAction);
    }, dependencies);

    return data;
}

export default useResourceLoader;