import React, { Component } from "react";
import './Header.scss';
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {
} from "../../actions/index";

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (

      <nav className={`navbar navbar-expand-lg navbar-light bg-light `}>
        <NavLink to={{ pathname: '/' }} className="navbar-brand">Tournaments</NavLink>

        <ul className="navbar-nav mr-auto pt-3 pt-lg-0"  >
          <li className="nav-item">
            <NavLink to={{ pathname: '/' }} className="nav-link">Текущий бой</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={{ pathname: '/fights' }} className="nav-link">Все бои</NavLink>
          </li>
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


const mapStateToProps = state => {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
