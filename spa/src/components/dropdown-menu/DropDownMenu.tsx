import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import SideCard from "./SideCard";

// useReducer things
// import { AppContext } from "./App";
// import { setCurrentArea } from "../actions/currentArea";
// import { recieveAreas } from "../actions/areas";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// configuration
import { SERVER_URL } from "../../utils/config";


function DropDownMenu(props:any){
    // destructing props
    const { isShowAreas, showAreas } = props;

    // local state
    const [currentCard, setCurrentCard] = useState(null);
    const [isSideCard, setIsSideCard] = useState(false);

    // useContext
    // const [{ areaState, user, currentAreaState, crimes }, dispatch] = useContext(AppContext);
    // const areas = areaState;

    // react router
    const navigateTo = useNavigate();

    useEffect(()=>{}, []);

    // handlers
    const handleMouseEnter = (e:any)=>{
        setIsSideCard(true);
        // setCurrentCard(areas[e.target.dataset.index - 1]);
    }

    const handleMouseLeave = (_e:React.MouseEvent<HTMLElement>)=>{
        setIsSideCard(false);
        // setCurrentCard(null);
    }

    const handleAreaClick = (e:any)=>{
        const tgt = e.target.dataset.index;
        if(tgt){
            // dispatch(setCurrentArea(tgt));
            // navigate("/grid");
        }
    }

    // let count = 0;
    // const areasElements = areas.length?areas.map((el, i)=>{
    //     let hasCrime = false;
    //     for(const crime of crimes){
    //         if(crime.areaId === el.id){
    //             hasCrime = true;
    //             // break;
    //         }

    //         if(currentAreaState == crime.areaId){
    //             count++;
    //         }

    //     }
    //     return (
    //         <li key={el.id}
    //             data-index={el.id}
    //             className={hasCrime?"has-crime":""}>
    //             {el.name}
    //         </li>
    //     )

    //     }):[];

    return(
        <div onClick={showAreas}>
            {/* <span className={count < crimes.length ? "alert" : ""}>
                Areas <br />
                <FontAwesomeIcon icon={faAngleDown} />
            </span> */}
            <div className={"areas" + (isShowAreas? " open":"")}>
                <ul onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleAreaClick}>
                    {/* {areasElements} */}
                </ul>
                {/* <SideCard {...currentCard} show={isSideCard} /> */}
            </div>
        </div>
    )
}

export default DropDownMenu;