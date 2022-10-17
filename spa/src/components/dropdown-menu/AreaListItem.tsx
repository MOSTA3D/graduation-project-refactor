import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
import SideCard from "./SideCard";

interface Area{
    id:number;
    name:string;
    image:string;
    location:string;
}

interface AreaListItemProps{
    area:Area
}
function AreaListItem(props:AreaListItemProps){
    const {name, image} = props.area;
    const [showCard, setShowCard] = useState(false);
    const navigateTo = useNavigate();
    
    const handleMouseEnter = (_e:MouseEvent<HTMLElement>)=>{
        setShowCard(true);
    }

    const handleMouseLeave = (_e:MouseEvent<HTMLElement>)=>{
        setShowCard(false);
    }

    const handleItemClick = (_e:MouseEvent<HTMLElement>)=>{
        // to-do : navigate to /grid with the current area
        navigateTo(`/grid/${name}`);
    }
    
    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleItemClick}>
            {name}
            {showCard && <SideCard {...{name, image}} showCard/>}
        </li>
    )
}

export default AreaListItem;