import React from "react";

interface ISideCardProps{
    name: string;
    image: string;
    show: boolean;
}

function SideCard(props:ISideCardProps){
    const { name, image, show } = props;
    return(
        <>
            {name&&(
                <div className={"side-card" + (show ? " open" : "")}>
                    {name?(
                        <>
                            <img src={image} alt={name} />
                            <h2>{name}</h2>
                        </>
                    ):(
                        <>
                            <div> loading </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default SideCard;