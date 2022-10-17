import { useParams } from "react-router-dom";
import RegularList from "../../components/dropdown-menu/RegularList";
import Loading from "../../components/loading/Loading";
import useResourceLoader from "../../customHooks/useResourceLoader";
import { CurrentAreaState, getCurrentAreaDetails } from "../../slices/currentAreaSlice";
import CamgridCell from "./CamgridCell";

function CamGrid() {

    const {areaName} = useParams();

    const {currentArea} = useResourceLoader<CurrentAreaState>("currentArea", getCurrentAreaDetails(areaName as string), [areaName as string]);

    return(
        <main className="cam-grid">
            {currentArea.cameras ? (
                <RegularList items={currentArea.cameras} ListItem={CamgridCell} resourceName="camera" />
            ):(
                // <Loading />
                <></>
            )}
        </main>
    )
}

export default CamGrid;