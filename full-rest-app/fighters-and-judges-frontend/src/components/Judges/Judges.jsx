import React, { Component } from "react";
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios';



class Judges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [] ,
      mypersons : null
    };

  }
    handleClick = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8000/get')
    .then(res => {
      console.log(res.data)
      const persons = res.data.status;
      this.setState({ persons : persons });

     })
     axios.post('http://localhost:8000/post', { post: 'example' })
     .then(res=> {
      console.log(res.data)
     })
  }
  render() {
    
    return (
      
      <div className="container"> 
        <div className="row">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Имя"/>       
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Фамилия"/>
                    </div>
                </div>
            </form>
            <div className="btn-group ml-3 " >
                <button className="btn mr-3 btn-secondary ">Сохранить</button>
            </div>
    </div>
      </div>
    );
  }
}

export default Judges;








