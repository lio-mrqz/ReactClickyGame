import React from "react";
import Pic1 from "../../Images/showcase.jpeg"

function GameArea() {
    return(
        <div className="wrapper">
            <div className="card">
                <img src={Pic1} className="card-img" alt="..."/>
            </div>
        </div>
    )
}

export default GameArea;