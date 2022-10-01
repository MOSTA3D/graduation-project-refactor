import React, { useState } from "react";
import { useNavigate } from "react-router";
import Clock from "../clock/Clock";

function Nav(props:any){
    const [ flipped, setFlipped ] = useState(false);
    const [ sideMenu, setSideMenu ] = useState(false);
    const [ isShowAreas, setIsShowAreas ] = useState(false);

    const navigateTo = useNavigate();

    // destructing props
    const { authed, setAuthed } = props;

    // console.log(history);

    const showAreas = ()=>{
        setIsShowAreas(!isShowAreas);
        return;
    }

    function onFlipIconClick(e:React.MouseEvent){
        setFlipped(!flipped);
        setSideMenu(!sideMenu);

        return;
    }

    return(
        <nav className="s-nav">
            {/* {authed && (
                <FontAwesomeIcon className="icon-left-angle" icon={faAngleLeft} onClick={()=> navigateTo(-1)} />
            )}
            <span className="nav-title">
                City Security System
                <Clock />
            </span>
            {authed && (
                <>
                    <AreasMenu {...{isShowAreas, showAreas}} />
                    <FlipIcon {...{flipped, onFlipIconClick}} />
                    <SideMenu {...{sideMenu, setAuthed, onFlipIconClick}} />
                </>
            )} */}
        </nav>
    )
}


export default Nav;