import React from "react";
import "./style.css";

// the relative path "{require('../../assets/images/showcase.jpeg')}" works here, but not when referenced in the JSON file.
function ImgCard(props) {
    const imageClick = ()=> {
        console.log('Clicked ImgCard')
    }
    return(
        <div className="card">
            <img src={props.image} alt={props.id} onClick={()=>imageClick()}/>
            {console.error()}
        </div>
    )
    
}

export default ImgCard;