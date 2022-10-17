import { useContext, useState, useEffect, useRef, MouseEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Camera, CurrentArea } from "../../slices/currentAreaSlice";

function CameraPage(){

    const { cameras } = useAppSelector(state=>state.currentArea.currentArea);
    const { cameraId } = useParams();

    const navigate = useNavigate();

    const [ isSideMenu, setIsSideMenu ] = useState(false);
    const [ currentCamera, setCurrentCamera ] = useState<Camera>(cameras[Number(cameraId)]);
    // let suspects = [];
    // let currentCrime = {};

    let slideIconNotification = false;
    // const [ persons, setPersons ] = useState("");

    // console.group("suspects");
    // for(const crime of crimes){
    //     if(crime.camId == id){
    //         currentCrime = crime;
    //         console.log("suspects are ", currentCrime.suspects);
    //         // break;
    //     }

    //     if(crime.camId != id && crime.areaId == currentAreaState){
    //         slideIconNotification = true;
    //     }
    // }
    // console.groupEnd();


    // sideeffects
    useEffect(()=>{
        
    }, [])

    // handlers
    const onSlideIconClick = (_e:MouseEvent<HTMLElement>)=>{
        setIsSideMenu(!isSideMenu);
    }

    const handleCameraClick = (_e:MouseEvent<HTMLElement>)=>{
        setIsSideMenu(false);
        // navigate(`/grid/${e.target.dataset.cid}`)
    }

    const handleSetSafe = (_e:MouseEvent<HTMLButtonElement>)=>{

    }

    return (
        currentCamera?(
            <div className="camera">
                <aside className={isSideMenu ? "open":""}>
                    <div className={"slide-icon" + ((slideIconNotification && !isSideMenu) ? " alert" : "")} onClick={onSlideIconClick}>
                        g
                    </div>
                    <ul>
                        {cameras.map(el=>{
                            return(
                            <li key={el.id} className={(el.id===Number(cameraId)?"active":"") + ("" ? "alert" : "")} onClick={handleCameraClick} data-cid={el.id}>
                                Camera number {el.id}
                            </li>
                            )}
                        )}
                    </ul>
                </aside>
                <div className="reserver"></div>
                <main className="camera-main">
                    <main>
                            <video src={currentCamera.url} controls>

                            </video>
                    </main>
                    <aside>
                            {/* {(currentCrime.suspects) && currentCrime.suspects.map((image, i)=><img key={i} src={image} alt="suspect" />)} */}
                    </aside>
                    <footer>
                        <div>
                            <h3>
                                Summary
                            </h3>
                            <hr />
                            <br />
                            <ul>
                                {/* {currentCrime.summery && currentCrime.summery.map(summery=>(<li>{summery}</li>))} */}
                            </ul>
                        </div>
                    </footer>
                    <div className="controller">
                        <button className="safe" onClick={handleSetSafe}>
                            Mark as Safe
                        </button>
                        <button>
                            Generate report
                        </button>
                    </div>
                </main>
            </div>
        ):(
            <div>
                waiting
            </div>
        )
    )
}

export default CameraPage;