import React, { Component } from "react";
import './Judges.scss';
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {
  requestJudges,
  updateJudge,
  createJudge,
  deleteJudge
} from "../../actions/index";
class Judges extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newJudgeFirstname: "",
      newJudgeLastname: "",
      updateJudgeId: null,
      updateJudgeLastname: "",
      updateJudgeFirstname: "",
    };
  }

  componentDidMount() {
    this.props.requestJudges();

  }

  showJudgeUpdateForm(id, first_name, last_name) {
    this.setState({
      updateJudgeId: id,
      updateJudgeFirstname: first_name,
      updateJudgeLastname: last_name,
    })
  }

  hideJudgeUpdateForm() {
    this.setState({ updateJudgeId: null });
  }

  deleteJudge(id) {
    this.props.deleteJudge(id)
  }


  createJudge(e) {
    this.props.createJudge(this.state.newJudgeFirstname, this.state.newJudgeLastname)
    e.preventDefault();
  }

  updateJudge(id) {
    this.props.updateJudge(id, this.state.updateJudgeFirstname, this.state.updateJudgeLastname)
    this.setState({ updateJudgeId: null });
  }


  newJudgeFirstnameHandleChange = event => {
    this.setState({ newJudgeFirstname: event.target.value });
  };

  newJudgeLastnameHandleChange = event => {
    this.setState({ newJudgeLastname: event.target.value });
  };

  updateJudgeFirstnameHandleChange = event => {
    this.setState({ updateJudgeFirstname: event.target.value });
  };

  updateJudgeLastnameHandleChange = event => {
    this.setState({ updateJudgeLastname: event.target.value });
  };
  render() {
    return (

      <div className="container">
        <div className="row">


          <div className="col-md-8 offset-md-2">
            <div className="card mt-2">
              <div className="card-body">
                <h5 className="card-title">Все судьи</h5>

                {this.props.judgeCreateErrors && this.props.judgeCreateErrors.length > 0 &&
                  <div className="row mb-2">
                    <div className="col-md-12 ">
                      {this.props.judgeCreateErrors.map((item, index) =>
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
                          value={this.state.newJudgeFirstname}
                          onChange={this.newJudgeFirstnameHandleChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <input type="text" className="form-control" placeholder="Фамилия"
                          value={this.state.newJudgeLastname}
                          onChange={this.newJudgeLastnameHandleChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <button className="btn btn-secondary btn-block" onClick={this.createJudge.bind(this)}>Добавить</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div>
                  <table className="table  table-sm">
                    <tbody>

                      {this.props.judges && [].concat(this.props.judges).map((judge, index) =>
                        <tr key={index.toString()}>
                          <td>

                            {
                              this.state.updateJudgeId == judge.id ? (

                                <form>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <input type="text" className="form-control" placeholder="Имя"
                                        value={this.state.updateJudgeFirstname}
                                        onChange={this.updateJudgeFirstnameHandleChange}
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input type="text" className="form-control" placeholder="Фамилия"
                                        value={this.state.updateJudgeLastname}
                                        onChange={this.updateJudgeLastnameHandleChange}
                                      />
                                    </div>
                                  </div>
                                </form>
                              ) : (
                                  <div>{judge.first_name} {judge.last_name}</div>
                                )
                            }
                          </td>
                          <td>
                            {
                              this.state.updateJudgeId == judge.id ? (
                                <div className="btn-group float-right" >
                                  <button className="btn btn-secondary btn-sm  " onClick={this.updateJudge.bind(this, judge.id)}>Сохранить</button>
                                  <button className="btn btn-danger btn-sm  " onClick={this.hideJudgeUpdateForm.bind(this)}>Отменить</button>
                                </div>
                              ) : (
                                  <div className="btn-group float-right" >
                                    <button className="btn btn-secondary btn-sm" onClick={this.showJudgeUpdateForm.bind(this, judge.id, judge.first_name, judge.last_name)}>Изменить</button>
                                    <button className="btn btn-danger btn-sm" onClick={this.deleteJudge.bind(this, judge.id)}>Удалить</button>
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
    judges: state.judges,
    judgeCreateErrors: state.judgeCreateErrors,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    requestJudges: () => dispatch(requestJudges()),
    createJudge: (first_name, last_name) => dispatch(createJudge(first_name, last_name)),
    updateJudge: (id, first_name, last_name) => dispatch(updateJudge(id, first_name, last_name)),
    deleteJudge: (id) => dispatch(deleteJudge(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Judges);
