import React from "react";
import GuessMessage from "../GuessMessage";

function Nav(props) {
  return (
      <ul className="nav nav-pills nav-fill">
        <li className="brand nav-item">
          <a className="navbar-brand" href="/">
            ClickyGame
          </a>
        </li>
        <li className="nav-item">
            <GuessMessage />
        </li>
        <li className="nav-item">
        <p>Score: {props.score} | Top Score: {props.topScore}</p>
        <button onClick={props.increaseScore}>button</button>
        </li>
      </ul>
  );
}

export default Nav;
