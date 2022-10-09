import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { SERVER_URL } from "../utils/config";
import { getData, postData } from "../utils/helper/helper";

// interface 

const resourceLoaderWithApi = (Component:React.FC<any>, resourceName:string, resourceUrl:string)=>(props:any)=>{

    const [data, setData] = useState();
    const {token} = useAppSelector(state=>state.auth.user);

    useEffect(()=>{
        (async ()=>{
            try{            
                const result = await getData(resourceUrl, token);
                setData(result);
            }catch(e){
                // to-do : do global error message state with redux
                console.log(e);
            }
        })();
    }, []);

    return <Component {...props} {...{[resourceName]: data}} />
}

export default resourceLoaderWithApi;