import React, { ChangeEvent } from "react"
import { D_ERR_SHADOW } from "../../utils/config";

interface InputProps{
    type: string;
    name: string;
    regex: RegExp;
    placeholder: string;
    value: string;
    errorMessage: string;
    password?: string;
    setMethod:React.Dispatch<React.SetStateAction<string>>;
}


function isMatched(str:string, pattern:RegExp):boolean{
    return pattern.test(str);
}

function showErrorShadow(element:HTMLElement):void{
    element.parentElement?.classList.add("show");
}

function removeErrorShadow(element:HTMLElement):void{
    element.parentElement?.classList.remove("show");
}


function Input(props:InputProps){

    const inputChangeWrapper = (setMethod:React.Dispatch<React.SetStateAction<string>>, regex:RegExp)=>(e:ChangeEvent<HTMLInputElement>)=>{
        const tgtVal = e.target.value;
        const isSamePassword = props.password ? (props.password === tgtVal) : true;

        if(!(isMatched(tgtVal, regex) && isSamePassword)){
            showErrorShadow(e.target);
        }else{
            removeErrorShadow(e.target);
        }

        setMethod(tgtVal);
    }



    return (
        <div className="input">
            <input {...props} required onChange={inputChangeWrapper(props.setMethod, props.regex)}/>
            <p>{props.errorMessage}</p>
        </div>
    )
}

export default Input;