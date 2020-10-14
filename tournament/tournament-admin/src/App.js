import React, { Component } from 'react';
import Main from './views/Main';
import Fight from './views/Fight';
import Fights from './views/Fights';
import Fighters from './views/Fighters';
import Judges from './views/Judges';
import Header from './components/Header';
import './App.css';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/fights/:id' component={Fight} />
          <Route path='/fights' component={Fights} />
          <Route path='/fighters' component={Fighters} />
          <Route path='/judges' component={Judges} />
        </Switch>
      </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
