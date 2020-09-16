import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class PersonInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: ""
    };
    this.newFighterFirstname = this.newFighterFirstname.bind(this);
    this.newFighterLastname = this.newFighterLastname.bind(this);
    this.myButton=this.myButton.bind(this);
  }
  
  newFighterFirstname(event) {
    this.setState({first_name : event.target.value})
    console.log(this.state.id)
  }

  newFighterLastname(event) {
    this.setState({last_name  : event.target.value})
  }

  myButton(event) {
    event.preventDefault();
    axios(`http://localhost:8000/post`, {
      method: "post", withCredentials: true, data: {
        first_name: this.state.first_name ,
        last_name: this.state.last_name
      }
    }).then(res => {
      console.log(res)
      console.log(res.data)
  })
  this.setState({first_name : ""})
  this.setState({last_name  : ""})
  console.log(this.state.first_name , this.state.last_name)
  event.preventDefault();
  }
  render() {
    const fullname = [this.state];
    const name = fullname.map((name,index) => <li key={index}>{name.first_name} {name.last_name}</li>);
    return (
      <div>
        <form >
          <input type="text" 
          placeholder="Имя" 
          value={this.state.first_name}
          onChange={this.newFighterFirstname} 
          /> 
          <input  type="text" 
          placeholder="Фамилия"
          value={this.state.last_name}
          onChange={this.newFighterLastname}
          />
          <button onClick={this.myButton}>Сохранить</button> 
          <ul>
            {name}
          </ul>     
        </form>
      </div>
    )
  }
}

export default PersonInput;