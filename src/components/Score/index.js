import React, {Component} from "react";
import Nav from "../Nav"
// import ImgCard from "../ImgCard";

class Score extends Component {
  state = {
    score: 0
  };

  increaseScore = () => {
    this.setState({ score: this.state.score + 1 })
  };

  render() {
    return(
      <div>
        <Nav 
          score={this.state.score}
          topScore={this.state.score}
        />
      </div>
    );
  }
}

export default Score;