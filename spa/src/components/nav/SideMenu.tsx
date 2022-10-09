import MyGridIcon from "../icons/MyGridIcon";
import { MouseEvent, MouseEventHandler, useContext } from "react";


// import { grid } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import House from "../icons/House";
import DoorOpenIcon from "../icons/DoorOpenIcon";

function SideMenu (props:any){

    const { sideMenu, setAuthed, onFlipIconClick } = props;

    // handlers
    // const onItemClick = ()=>{

    // }
    const logoutHandler = (e:any)=>{
        setAuthed(false);
        onFlipIconClick();
    };

    return(
        <div className={"side-menu" + (sideMenu ? " open":"")}>
            <Link to="/">
                <span onClick={onFlipIconClick}>
                    <House />
                    <br />
                    <h6>Home</h6>
                </span>
            </Link>
            <Link to="/grid">
                <span onClick={onFlipIconClick}>
                    <MyGridIcon />
                    {/* <FontAwesomeIcon icon="coffee" /> */}
                    <h6 style={{marginTop: "3px"}}>Grid</h6>
                </span>
            </Link>
            <hr style={{width: "70%"}}/>
            <Link to="/">
                <span onClick={logoutHandler}>
                    <DoorOpenIcon />
                    <h6>logout</h6>
                </span>
            </Link>
        </div>
    );
}

export default SideMenu;