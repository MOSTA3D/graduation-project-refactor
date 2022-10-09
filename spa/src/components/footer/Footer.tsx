import Envelope from "../icons/Envelop";
import image from "../../assets/logo_transparent.png";

function Footer(){
    const supportEmail = "support@detectors.com";
    return(
        <footer className="main-footer">
            <a href={"https://"+supportEmail}>
                <Envelope/> &nbsp;
                {supportEmail}
            </a>
            <div className="logo">
                <img className="logo" src={image} />
            </div>
        </footer>
    )
}

export default Footer;