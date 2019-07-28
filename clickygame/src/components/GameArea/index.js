import React from 'react';
import imageList from '../../imageList.json'
import ImgCard from '../ImgCard';
// import { log } from 'util';

class GameArea extends React.Component {
    state = {
        imageList
    } 
    render() {
    return(
        <div className="wrapper">
            {this.state.imageList.map(image => (
            <ImgCard 
              id={image.id}
              key={image.id}
              image={image.image}
            />
            ))}
            {console.log(ImgCard.image)}
        </div>
    )
    } 
}

export default GameArea;