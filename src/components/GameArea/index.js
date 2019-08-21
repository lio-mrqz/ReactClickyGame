import React from 'react'
import imageList from '../../imageList.json'
import ImgCard from '../ImgCard'
import imageFolder from '../../assets/images/showcase.jpeg'
import './style.css'
// import imageFolder from 'src/assets/images/showcase.jpeg'

class GameArea extends React.Component {
    state = {
        imageList,
        // imageFolder
    } 
    render() {
    return(
        <div className="wrapper">
          <div className="card-columns">
            {console.log(imageFolder)}
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