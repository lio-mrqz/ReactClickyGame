import React, {Component} from "react";
import Nav from "../Nav"

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
          increaseScore={this.increaseScore}
        />
      </div>
    );
  }
}

export default Score;