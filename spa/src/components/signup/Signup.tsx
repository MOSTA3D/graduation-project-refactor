import { useRef, useState, MouseEvent } from "react";
import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from "../../utils/config";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import { CredintialsWrapperWithLoginStatus, getAuthData } from "../../slices/authSlice";
import { setLoading, unsetLoading } from "../../slices/loadingSlice";

function Signup(props:any){

    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ cpassword, setCpassword ] = useState("");

    const { isLogin, setIsLogin } = props;

    // refs
    const myRef = useRef<HTMLElement>(null as unknown as HTMLDivElement);
    const formRef = useRef<HTMLFormElement>(null as unknown as HTMLFormElement);

    // redux
    const dispatch = useDispatch();

    const isReadyToSubmit = ()=>{
        return email && password && (isLogin || (firstname && lastname && cpassword))
    }

    const onRegisterClick = (e:MouseEvent<HTMLElement>)=>{
        setIsLogin(!isLogin);
    }

    const onSubmitClick = async (e:any)=>{
        e.preventDefault();

        if(!isReadyToSubmit()){
            return;
        }

        const data = isLogin? {email, password} : {firstname, lastname, email, password};

        const payload:CredintialsWrapperWithLoginStatus = {
            isLogin: isLogin,
            credintials: data
        };

        (dispatch as any)(getAuthData(payload));
    }

    return (
        <form className={"signup " + (isLogin?"signin":"")}>
            
            { !isLogin && (
                <div className="name">
                    <Input type="text" placeholder="Firstname" name="firstname" value={firstname} setMethod = {setFirstname} regex = {NAME_REGEX} errorMessage = "name like john" />
                    <Input type="text" placeholder="lastname" name="lastnname" value={lastname} setMethod = {setLastname} regex = {NAME_REGEX} errorMessage = "name like john" />
                </div>
            ) }

            <Input type="text" placeholder="Email" name="email" value={email} setMethod = {setEmail} regex = {EMAIL_REGEX} errorMessage = "email like john@sdf.com"/>
            <Input type="password" placeholder="Password" name="passord" value={password} setMethod = {setPassword} regex = {PASSWORD_REGEX} errorMessage = "1 special chr, 1 uppercase 1 number"/>

            { !isLogin && (<Input type="password" placeholder="Confirm Password" name="cpassord" value={cpassword} password = {password} setMethod = {setCpassword} regex = {PASSWORD_REGEX} errorMessage = "Passwords must be the same"/> )}
            
            <input type="submit" onClick={onSubmitClick} value={isLogin?"Signin":"Signup"} />
            <hr />
            <button className="register" onClick={onRegisterClick} >{!isLogin?"Signin":"Register"}</button>
        </form>
    )
}

export default Signup;