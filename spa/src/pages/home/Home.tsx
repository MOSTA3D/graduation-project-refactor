import logo from "../../assets/logo_vector.svg";

function Home(props:any){
    return (
        <div className="home">
            <div className="main-logo">
                <img src={logo} alt="logo"/>
            </div>
            {props.children}
        </div>
    )
}

export default Home;