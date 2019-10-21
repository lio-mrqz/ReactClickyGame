import React from 'react'
import imageList from '../../imageList.json'
import ImgCard from '../ImgCard'
import './style.css'
import cabin from "../../assets/images/cabin.png"
import cake from "../../assets/images/cake.png"
import circus from "../../assets/images/circus.png"
import game from "../../assets/images/game.png"
import safe from "../../assets/images/safe.png"
import submarine from "../../assets/images/submarine.png"

class GameArea extends React.Component {
    state = {
        imageList,
        // imageFolder
    } 
    render() {
    return(
        <div className="wrapper">
          <div className="card-columns">
            {this.state.imageList.map(image => (
            <ImgCard 
              id={image.id}
              key={image.id}
              image={image.image}
            />
            ))}
          </div>
        </div>
    )
    } 
}

export default GameArea;