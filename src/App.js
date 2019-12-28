import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  state = {

  }

  render() {
    return(
      <Redirect to='/Login'/>
    );
  }
}




export default App;
