import React from 'react';
import imageList from '../../imageList.json'
import ImgCard from '../ImgCard';
import './style.css'

class GameArea extends React.Component {
    state = {
        imageList
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