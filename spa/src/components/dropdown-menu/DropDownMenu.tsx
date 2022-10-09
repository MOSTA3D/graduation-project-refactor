import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AngleDown from "../icons/angleDown";
import RegularList from "./RegularList";

export interface DropDownMenuProps{
    ListItem:React.FC<any>,
    resourceName:string,
    className:string,
    items:any[],
    name:string,
}


function DropDownMenu({ ListItem, resourceName, className, items, name }:DropDownMenuProps){
    // destructing props

    const [isShowList, setIsShowList] = useState(false);

    const dispatch = useAppDispatch();

    const navigateTo = useNavigate();


    let count = 0;

    return(
        <div onClick={()=>setIsShowList(!isShowList)}>
            <span>
                {name} <br />
                <AngleDown />
            </span>

            {/* <div className={"areas dd-menu" + (isShowList? " open":"")}> */}

            <div className={className + (isShowList ? " open":"")}>
                <RegularList {...{ListItem, items, resourceName}} />
            </div>
        </div>
    )
}

export default DropDownMenu;