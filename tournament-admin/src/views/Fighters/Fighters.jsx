import React, { Component } from "react";
import './Fighters.scss';
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {
  requestFighters,
  createFighter,
  updateFighter,
  deleteFighter,
} from "../../actions/index";
class Fighters extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newFighterFirstname: "",
      newFighterLastname: "",
      updateFighterId: null,
      updateFighterLastname: "",
      updateFighterFirstname: "",
    };
  }

  componentDidMount() {
    this.props.requestFighters();
  }

  showFighterUpdateForm(id, first_name, last_name) {
    this.setState({
      updateFighterId: id,
      updateFighterFirstname: first_name,
      updateFighterLastname: last_name,
    })
  }

  

  updateFighter(id) {
    this.props.updateFighter(id, this.state.updateFighterFirstname, this.state.updateFighterLastname)
    this.setState({ updateFighterId: null });
  }


  hideFighterUpdateForm() {
    this.setState({ updateFighterId: null });
  }

  deleteFighter(id) {
    this.props.deleteFighter(id)
  }

  createFighter(e) {
    this.props.createFighter(this.state.newFighterFirstname, this.state.newFighterLastname)
    e.preventDefault();
  }

  newFighterFirstnameHandleChange = event => {
    this.setState({ newFighterFirstname: event.target.value });
  };

  newFighterLastnameHandleChange = event => {
    this.setState({ newFighterLastname: event.target.value });
  };


  updateFighterFirstnameHandleChange = event => {
    this.setState({ updateFighterFirstname: event.target.value });
  };

  updateFighterLastnameHandleChange = event => {
    this.setState({ updateFighterLastname: event.target.value });
  };

  render() {
    return (

      <div className="container">

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card mt-2">
              <div className="card-body">

                <h5 className="card-title">Все бойцы</h5>

                {this.props.fighterCreateErrors && this.props.fighterCreateErrors.length > 0 &&
                  <div className="row mb-2">
                    <div className="col-md-12 ">
                      {this.props.fighterCreateErrors.map((item, index) =>
                        <div className="alert alert-danger" key={index.toString()}>
                          {item}
                        </div>
                      )}
                    </div>
                  </div>
                }

                <div>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <input type="text" className="form-control" placeholder="Имя"
                          value={this.state.newFighterFirstname}
                          onChange={this.newFighterFirstnameHandleChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <input type="text" className="form-control" placeholder="Фамилия"
                          value={this.state.newFighterLastname}
                          onChange={this.newFighterLastnameHandleChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <button className="btn btn-secondary btn-block  " onClick={this.createFighter.bind(this)}>Добавить</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div>
                  <table className="table  table-sm">
                    <tbody>

                      {this.props.fighters && [].concat(this.props.fighters).map((fighter, index) =>

                        <tr key={index.toString()}>
                          <td>

                            {
                              fighter && this.state.updateFighterId == fighter.id ? (

                                <form>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <input type="text" className="form-control" placeholder="Имя"
                                        value={this.state.updateFighterFirstname}
                                        onChange={this.updateFighterFirstnameHandleChange}
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input type="text" className="form-control" placeholder="Фамилия"
                                        value={this.state.updateFighterLastname}
                                        onChange={this.updateFighterLastnameHandleChange}
                                      />
                                    </div>
                                  </div>
                                </form>
                              ) : (
                                  <div>{fighter.first_name} {fighter.last_name}</div>
                                )
                            }

                          </td>
                          <td>
                            {
                              fighter && this.state.updateFighterId == fighter.id ? (
                                <div className="btn-group float-right" >
                                  <button className="btn btn-secondary btn-sm  " onClick={this.updateFighter.bind(this, fighter.id)}>Сохранить</button>
                                  <button className="btn btn-danger btn-sm  " onClick={this.hideFighterUpdateForm.bind(this)}>Отменить</button>
                                </div>
                              ) : (
                                  <div className="btn-group float-right" >
                                    <button className="btn btn-secondary btn-sm" onClick={this.showFighterUpdateForm.bind(this, fighter.id, fighter.first_name, fighter.last_name)}>Изменить</button>
                                    <button className="btn btn-danger btn-sm" onClick={this.deleteFighter.bind(this, fighter.id)}>Удалить</button>
                                  </div>
                                )
                            }
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }

}


const mapStateToProps = state => {
  return {
    fighters: state.fighters,
    fighterCreateErrors: state.fighterCreateErrors,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    requestFighters: () => dispatch(requestFighters()),
    createFighter: (first_name, last_name) => dispatch(createFighter(first_name, last_name)),
    updateFighter: (id, first_name, last_name) => dispatch(updateFighter(id, first_name, last_name)),
    deleteFighter: (id) => dispatch(deleteFighter(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fighters);
