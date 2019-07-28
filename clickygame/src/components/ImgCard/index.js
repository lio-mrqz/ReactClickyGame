import React from "react";
import "./style.css";

function ImgCard(props) {
    return(
        <div className="card">
            <img src={props.image} alt={props.id} onClick={props.increaseScore}/>
        </div>
    )
}

export default ImgCard;