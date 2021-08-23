import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class myApp extends Component {

  render() {
    let eater1 = "Drake";
    let eater2 = "Wiliam";
    return (
      <div className="myApp">
        <h2>{eater1}</h2>
        <h2>{eater2}</h2>
      </div>
    );
  }
}

export default myApp;