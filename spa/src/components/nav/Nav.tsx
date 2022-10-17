import React, { useState } from "react";
import Clock from "../clock/Clock";
import FlipIcon from "./FlipIcon";
import SideMenu from "./SideMenu";
import DropDownMenu from "../dropdown-menu/DropDownMenu";
import areasLoader from "../dropdown-menu/areasLoader";
import AreaListItem from "../dropdown-menu/AreaListItem";

const AreasMenu = areasLoader(DropDownMenu);

function Nav(props:any){
    const [ flipped, setFlipped ] = useState(false);
    const [ sideMenu, setSideMenu ] = useState(false);

    const { isAuthed } = props;

    function onFlipIconClick(e:React.MouseEvent){
        setFlipped(!flipped);
        setSideMenu(!sideMenu);
    }

    return(
        <nav className="s-nav">
            {isAuthed && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="angle-left">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            )}
            <span className="nav-title">
                City Security System
                <Clock />
            </span>
            {isAuthed && (
                <>
                    <AreasMenu ListItem = {AreaListItem} resourceName="area" className="areas" name="Areas" />
                    <FlipIcon {...{flipped, onFlipIconClick}} />
                    <SideMenu {...{sideMenu, onFlipIconClick}} />
                </>
            )}
        </nav>
    )
}


export default Nav;