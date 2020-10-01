import React, { Component } from "react";
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
      };
    }
    render() {
      return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light `}>
          <ul className="navbar-nav mr-auto pt-3 pt-lg-0"  >
            <li className="nav-item">
              <NavLink to={{ pathname: '/judges' }} className="nav-link">Судья</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={{ pathname: '/fighters' }} className="nav-link">Бойцы</NavLink>
            </li>
          </ul>
          </nav>
  
      );
    }
  
  }
  
  
  export default Header;
  