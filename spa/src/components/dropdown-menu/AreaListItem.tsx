import { MouseEvent, useState } from "react";
import SideCard from "./SideCard";

interface Area{
    name:string;
    image:string;
    location:string;
}

interface AreaListItemProps{
    area:Area
}
function AreaListItem(props:AreaListItemProps){
    console.log("areaitem props is ", props);
    const {name, image} = props.area;
    const [showCard, setShowCard] = useState(false);

    const handleMouseEnter = (_e:MouseEvent<HTMLElement>)=>{
        setShowCard(true);
    }

    const handleMouseLeave = (_e:MouseEvent<HTMLElement>)=>{
        setShowCard(false);
    }

    const handleItemClick = (_e:MouseEvent<HTMLElement>)=>{
        // to-do : navigate to /grid with the current area
    }
    
    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleItemClick}>
            {name}
            <SideCard {...{name, image}} showCard/>
        </li>
    )
}

export default AreaListItem;