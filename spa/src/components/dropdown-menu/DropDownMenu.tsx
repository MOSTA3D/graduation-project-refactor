import { useState} from "react";
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
    const [isShowList, setIsShowList] = useState(false);
    return(
        <div onClick={()=>setIsShowList(!isShowList)}>
            <span>
                {name} <br />
                <AngleDown />
            </span>

            <div className={className + (isShowList ? " open":"")}>
                <ul>
                    <RegularList {...{ListItem, items, resourceName}} />
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu;