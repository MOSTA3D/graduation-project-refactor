import React from "react";

interface ISideCardProps{
    name: string;
    image: string;
    showCard: boolean;
}

function SideCard(props:ISideCardProps){
    const { name, image, showCard } = props;
    return(
        <>
            <div className={"side-card" + (showCard ? " open" : "")}>
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
        </>
    )
}

export default SideCard;