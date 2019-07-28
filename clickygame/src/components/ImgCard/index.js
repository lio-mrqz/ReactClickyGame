import React from "react";
import Pic1 from "../../Images/showcase.jpeg"

function ImgCard() {
    return(
        <div className="card">
            <img src={Pic1} alt="pic1"/>
        </div>
    )
}

export default ImgCard;