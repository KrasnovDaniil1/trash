import React, { Component } from "react";
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Fighters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      names:[]
    };
    this.newFighterFirstname = this.newFighterFirstname.bind(this);
    this.newFighterLastname = this.newFighterLastname.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  newFighterFirstname(event) {
    this.setState({first_name : event.target.value})
  }

  newFighterLastname(event) {
    this.setState({last_name  : event.target.value})
  }

  async saveName(event) {
    event.preventDefault();
    await axios(`http://localhost:8000/post`, {
      method: "post", data: {
        first_name: this.state.first_name ,
        last_name: this.state.last_name
      }
    })
    
   await axios.get('http://localhost:8000/get')
      .then(res => {
        console.log(res.data)
        this.setState({ names : res.data});
      })
  this.setState({first_name : ""})
  this.setState({last_name  : ""})
  }
  render() {
    const fullname = this.state.names;
    const name = fullname.map((name,index) => 
      <div className="card mt-2">
					<div className="card-body">
							<div key={index} className="btn-group mb-3 " >
                   Боец: {name.first_name} {name.last_name}   
              </div>
           </div>							
			</div>
     )
    return (

      <div className="container">
        <div className="row">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text"
                        className="form-control" 
                        placeholder="Имя"
                        value={this.state.first_name}
                        onChange={this.newFighterFirstname} />       
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" 
                        className="form-control"
                        placeholder="Фамилия"
                        value={this.state.last_name}
                        onChange={this.newFighterLastname} />
                    </div>
                     <div className="btn-group ml-4 " >
                        <button className="btn mr-3 btn-secondary"  onClick={this.saveName}>Сохранить</button>
                    </div>
                </div>
            </form>
            <div>
                {name}
            </div>
        </div>
      </div>
    );
  }

}


export default Fighters;
