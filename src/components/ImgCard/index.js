import React from "react";

function ImgCard(props) {
    const imageClick = ()=> {
        console.log('Clicked ImgCard')
    }
    return(
        <div className="card text-center">
            <img className="img-fluid" src={props.image} alt={props.id} onClick={()=>imageClick()}/>
            {console.error()}
        </div>
    )
    
}

export default ImgCard;