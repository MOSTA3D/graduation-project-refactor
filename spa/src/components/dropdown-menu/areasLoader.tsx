import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllAreas } from "../../slices/areaSlice";
import { DropDownMenuProps } from "./DropDownMenu";

// interface 



const areasLoader = (Component:React.FC<DropDownMenuProps>)=>(props:Omit<DropDownMenuProps, "items">)=>{
    const dispatch = useAppDispatch();
    const {areas} = useAppSelector(state=>state.area);

    useEffect(()=>{
        dispatch(getAllAreas());
    }, []);

    return <Component {...props} items={areas} />;
}

export default areasLoader;