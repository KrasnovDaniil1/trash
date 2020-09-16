import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PersonInput from './PersonInput';

class App extends React.Component {

  
  render() {
    return (
      <div>
        <PersonInput/>
      </div>
    )
  }
}

export default App;
