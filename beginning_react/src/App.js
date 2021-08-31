import React, { Component } from 'react';
import Header from './Header';
import * as firebase from "firebase/app";
// import 'firebase/firestore';
import User from './User';

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default App;