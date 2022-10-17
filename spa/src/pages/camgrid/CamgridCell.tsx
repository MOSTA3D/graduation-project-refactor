import { MouseEvent, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Camera } from "../../slices/currentAreaSlice";

interface camgridItemProps{
    camera:Camera;
}

function CamgridItem(props:camgridItemProps){
    const {hasCrime, id, url} = props.camera;
    const videoRef = useRef<HTMLVideoElement>(null as unknown as HTMLVideoElement);

    const {areaName} = useParams();

    const handleMouseEnter = (e:MouseEvent<HTMLElement>)=>{
        videoRef.current.play();
    }
    
    const handleMouseLeave = (e:MouseEvent<HTMLElement>)=>{
        videoRef.current.pause();
    }

    return (
        <div key={id} className={'something' + (hasCrime ? " has-crime" : "") }>
            <span>
                <Link to={`/grid/${areaName}/cameras/${id}`}>
                    <video ref={videoRef} src={url} muted={true}></video>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="video-wrapper"></div>
                </Link>
            </span>
        </div>
    )
}

export default CamgridItem;