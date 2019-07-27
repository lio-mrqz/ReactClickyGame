import React from "react";
import GuessMessage from "../GuessMessage";
import Score from "../Score"

function Nav() {
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
            <Score />
        </li>
      </ul>
  );
}

export default Nav;
