import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-3">Jumbo heading</h1>
        <p className="lead">Jumbo helper text</p>
        <hr className="my-2"/>
        <p>More info</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
        </p>
      </div>
    </div>
  );
}

export default App;
