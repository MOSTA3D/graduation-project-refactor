function FlipIcon(props:any){

    const { flipped, onFlipIconClick } = props;

    return(
        <span onClick={onFlipIconClick} className={"flip-icon" + (flipped ? " flipped":"")} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </span>
    )
}

export default FlipIcon;