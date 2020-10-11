import React, { Component } from "react";
import './Main.scss';
import Select from 'react-select'
import { components } from 'react-select';
import { NavLink, Link } from 'react-router-dom'
import { connect } from "react-redux";
import {
  requestCurrentFight,
  startFight,
  finishFight,
  updateRound,
  startRound,
  pauseRound,
  stopRound,
  createRound,
  requestRounds,
  createjudgesAttackVsProtection,// Я добавил
  judgesAttackVsProtection // Я добавил
   
} from "../../actions/index";
import moment from 'moment';
import axios from 'axios';
import momentDurationFormatSetup from "moment-duration-format";

// import { Nil } from "tcomb";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      judge_id: "",
      judge: "",
      fighter_id: "" , 
      fighter: "",
      action_type: ""
    };
    this.judges1RedAttack = this.judges1RedAttack.bind(this);
    this.judges1BlueAttack = this.judges1BlueAttack.bind(this);
    this.judges2RedAttack = this.judges2RedAttack.bind(this);
    this.judges2BlueAttack = this.judges2BlueAttack.bind(this);
    this.judges3RedAttack = this.judges3RedAttack.bind(this);
    this.judges3BlueAttack = this.judges3BlueAttack.bind(this);
    this.judges1RedProtection = this.judges1RedProtection.bind(this);
    this.judges1BlueProtection = this.judges1BlueProtection.bind(this);
    this.judges2RedProtection = this.judges2RedProtection.bind(this);
    this.judges2BlueProtection = this.judges2BlueProtection.bind(this);
    this.judges3RedProtection = this.judges3RedProtection.bind(this);
    this.judges3BlueProtection = this.judges3BlueProtection.bind(this);
  }
  componentDidMount() {    // Я добавил
    this.props.judgesAttackVsProtection();
  }
  createjudgesAttackVsProtection(e) {  // Я добавил
    this.props.createjudgesAttackVsProtection(this.state.judge_id, this.state.judge , this.state.fighter , this.state.fighter_id , this.state.fighter , this.state.action_type)
    e.preventDefault();
  }

judges1RedAttack() {
  this.setState({judge_id : "1"})
  this.setState({judge : "Судья 1"})
  this.setState({fighter_id : "1"})
  this.setState({fighter : "Красный угол"})
  this.setState({action_type : "Атака"})
}
judges1BlueAttack() {
  this.setState({judge_id : "2"})
  this.setState({judge : "Судья 1"})
  this.setState({fighter_id : "2"})
  this.setState({fighter : "Синий угол"})
  this.setState({action_type : "Атака"})
}
judges2RedAttack() {
  this.setState({judge_id : "3"})
  this.setState({judge : "Судья 2"})
  this.setState({fighter_id : "1"})
  this.setState({fighter : "Красный угол"})
  this.setState({action_type : "Атака"})
}
judges2BlueAttack() {
  this.setState({judge_id : "4"})
  this.setState({judge : "Судья 2"})
  this.setState({fighter_id : "2"})
  this.setState({fighter : "Синий угол"})
  this.setState({action_type : "Атака"})
}
judges3RedAttack() {
  this.setState({judge_id : "5"})
  this.setState({judge : "Судья 3"})
  this.setState({fighter_id : "1"})
  this.setState({fighter : "Красный угол"})
  this.setState({action_type : "Атака"})
}
judges3BlueAttack() {
  this.setState({judge_id : "6"})
  this.setState({judge : "Судья 3"})
  this.setState({fighter_id : "2"})
  this.setState({fighter : "Синий угол"})
  this.setState({action_type : "Атака"})
}
judges1RedProtection() {
  this.setState({judge_id : "1"})
  this.setState({judge : "Судья 1"})
  this.setState({fighter_id : "1"})
  this.setState({fighter : "Красный угол"})
  this.setState({action_type : "Защита"})
}
judges1BlueProtection() {
  this.setState({judge_id : "2"})
  this.setState({judge : "Судья 1"})
  this.setState({fighter_id : "2"})
  this.setState({fighter : "Синий угол"})
  this.setState({action_type : "Защита"})
}
judges2RedProtection() {
  this.setState({judge_id : "3"})
  this.setState({judge : "Судья 2"})
  this.setState({fighter_id : "1"})
  this.setState({fighter : "Красный угол"})
  this.setState({action_type : "Защита"})
}
judges2BlueProtection() {
  this.setState({judge_id : "4"})
  this.setState({judge : "Судья 2"})
  this.setState({fighter_id : "2"})
  this.setState({fighter : "Синий угол"})
  this.setState({action_type : "Защита"})
}
judges3RedProtection() {
  this.setState({judge_id : "5"})
  this.setState({judge : "Судья 3"})
  this.setState({fighter_id : "1"})
  this.setState({fighter : "Красный угол"})
  this.setState({action_type : "Защита"})
}
judges3BlueProtection() {
  this.setState({judge_id : "6"})
  this.setState({judge : "Судья 3"})
  this.setState({fighter_id : "2"})
  this.setState({fighter : "Синий угол"})
  this.setState({action_type : "Защита"})
}

/*   saveCurrentFight() {
     axios(`http://localhost:8000/api/actionCreateCurrentFight`, {
      method: "post", data: {
        judge_id : this.state.judge_id,
        judge : this.state.judge,
        fighter_id : this.state.fighter_id,
        fighter : this.state.fighter,
        action_type : this.state.action_type
      }
    })
  }*/
 /* componentDidMount() {
    this.props.requestCurrentFight();
    // var intervalId = setInterval(this.timerLoading.bind(this), 200);
    // this.setState({ intervalId: intervalId });
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentFight !== prevProps.currentFight) {
      this.props.requestRounds(this.props.currentFight.id);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timerLoading() {
    this.props.requestCurrentFight();
  }

  finishFight(id) {
    this.props.finishFight(id)
  }

  startFight(id) {
    this.props.startFight(id)
  }

  finishRound(id) {
    this.props.stopRound(id)
  }

  pauseRound(id) {
    this.props.pauseRound(id)
  }

  startRound(id) {
    this.props.startRound(id)
  }

  createRound(fightId, number) {
    console.log(this.props.currentFight.rounds_count)
    console.log(number)
    this.props.createRound(fightId, number)
  }

  remainingTime(startedAt, roundDuration) {
    let startMoment = moment(startedAt);
    let duration = moment.duration(moment().diff(startMoment))
    let remainingSeconds = duration.asSeconds() - roundDuration;
    if (remainingSeconds < roundDuration) {
      return moment.duration(Math.abs(remainingSeconds), 'seconds').format("mm:ss");
    } else {
      return '00:00'
    }
  }*/

  render() {

    return (
      <div className="container-fluid">
        <div>
          <div className="col-12 row d-flex justify-content-around">
              <div className="col-3 border border-dark rounded">
                <h3 className="text-center my-3">Судья 1</h3>
                <div className="col-12 d-flex justify-content-around mb-2">
                  <button onClick={this.judges1RedAttack} className="col-5  btn btn-danger">Атака</button>
                  <button onClick={this.judges1BlueAttack} className="col-5  btn btn-primary">Атака</button>
                </div>
              </div>
              <div className="col-3 border border-dark rounded">
                <h3 className="text-center my-3">Судья 2</h3>
                <div className="col-12 row d-flex justify-content-around mb-2">
                  <button onClick={this.judges2RedAttack} className="col-5  btn btn-danger">Атака</button>
                  <button onClick={this.judges2BlueAttack} className="col-5  btn btn-primary">Атака</button>
                </div>
              </div>
              <div className="col-3 border border-dark rounded">
                <h3 className="text-center my-3">Судья 3</h3>
                <div className="col-12 row d-flex justify-content-around mb-2">
                  <button onClick={this.judges3RedAttack} className="col-5  btn btn-danger">Атака</button>
                  <button onClick={this.judges3BlueAttack} className="col-5  btn btn-primary">Атака</button>
                </div>
              </div>
          </div>

          <div className="col-12 row d-flex justify-content-around mt-4">
              <div className="col-3 border border-dark rounded">
                <h3 className="text-center my-3">Судья 1</h3>
                <div className="col-12 row d-flex justify-content-around mb-2">
                  <button onClick={this.judges1RedProtection} className="col-5  btn btn-danger">Защита</button>
                  <button onClick={this.judges1BlueProtection} className="col-5  btn btn-primary">Защита</button>
                </div>
              </div>
              <div className="col-3 border border-dark rounded">
                <h3 className="text-center my-3">Судья 2</h3>
                <div className="col-12 row d-flex justify-content-around mb-2">
                  <button onClick={this.judges2RedProtection} className="col-5  btn btn-danger">Защита</button>
                  <button onClick={this.judges2BlueProtection} className="col-5  btn btn-primary">Защита</button>
                </div>
              </div>
              <div className="col-3 border border-dark rounded">
                <h3 className="text-center my-3">Судья 3</h3>
                <div className="col-12 row d-flex justify-content-around mb-2">
                  <button onClick={this.judges3RedProtection} className="col-5  btn btn-danger">Защита</button>
                  <button onClick={this.judges3BlueProtection} className="col-5  btn btn-primary">Защита</button>
          </div>
            </div>
    </div>

    </div>

        {/*this.props.currentFight &&
          this.props.currentFight.red_fighter &&
          this.props.currentFight.blue_fighter &&
          this.props.currentFight.attack_judge_1 &&
          this.props.currentFight.attack_judge_2 &&
          this.props.currentFight.attack_judge_3 &&
          this.props.currentFight.defence_judge_1 &&
          this.props.currentFight.defence_judge_2 &&
          this.props.currentFight.defence_judge_3 &&
          <div className="row">

            <div className="col-md-5 ">

              <div className="card mt-2">
                <div className="card-body">

                  <div className="btn-group float-right" >
                    <button className="btn btn-danger  btn-sm" onClick={this.finishFight.bind(this, this.props.currentFight.id)}>Завершить</button>
                  </div>

                  <h5 className="card-title">Текущий бой №{this.props.currentFight.id} &nbsp;

                    {this.props.currentFight.status == 1 &&
                      <small className="text-muted">Текущий</small>
                    }
                    {this.props.currentFight.status == 2 &&
                      <small className="text-muted">Завершен</small>
                    }
                    {this.props.currentFight.status == 0 &&
                      <small className="text-muted">Запланирован</small>
                    }

                  </h5>



                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <p>Красный угол: <span className="text-danger">{this.props.currentFight.red_fighter.first_name} {this.props.currentFight.red_fighter.last_name}</span> {this.props.currentFight.red_points}</p>
                      </div>
                      <div className="col-md-6">
                        <p>Синий угол: <span className="text-primary">{this.props.currentFight.blue_fighter.first_name} {this.props.currentFight.blue_fighter.last_name}</span> {this.props.currentFight.blue_points}</p>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-md-12">
                        <p>Количество раундов: {this.props.currentFight.max_rounds}</p>
                      </div>
                      <div className="col-md-12">
                        <p>Длительность раунда: {this.props.currentFight.round_duration}</p>
                      </div>
                      <div className="col-md-12">
                        <p>Количество очков за атаку: {this.props.currentFight.attack_points_for_action}</p>
                      </div>
                      <div className="col-md-12">
                        <p>Количество очков за защиту: {this.props.currentFight.defence_points_for_action}</p>
                      </div>
                    </div>


                    <button className="btn btn-primary mt-2 mb-2" onClick={this.createRound.bind(this, this.props.currentFight.id, this.props.currentFight.rounds_count + 1)}>Новый раунд</button>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ">

              {this.props.rounds && this.props.rounds
                .sort(function (a, b) {
                  if (a.number < b.number) { return 1; }
                  if (a.number > b.number) { return -1; }
                  return 0;
                }.bind(this))
                .map((round, index) =>
                  <div className="card mt-2" key={index.toString()}>
                    <div className="card-body">
                      <div className="btn-group mb-3 float-right" >
                        <button className="btn btn-primary  btn-sm" onClick={this.startRound.bind(this, round.id)}>Начать</button>
                        <button className="btn btn-danger  btn-sm" onClick={this.pauseRound.bind(this, round.id)}>Остановить</button>
                        <button className="btn btn-danger  btn-sm" onClick={this.finishRound.bind(this, round.id)}>Завершить</button>
                      </div>


                      {round.status == 1 &&
                        <div className="mr-2 mb-3 float-right">
                          {this.remainingTime(round.started_at, this.props.currentFight.round_duration)}
                        </div>
                      }

                      <h6 className="card-title">Раунд {round.number} &nbsp;

                              {round.status == 1 &&
                          <small className="text-muted">Текущий</small>
                        }
                        {round.status == 2 &&
                          <small className="text-muted">Остановлен</small>
                        }
                        {round.status == 3 &&
                          <small className="text-muted">Завершен</small>
                        }
                        {round.status == 0 &&
                          <small className="text-muted">Запланирован</small>
                        }

                      </h6>
                      <div className="clearfix"></div>

                      <div className="row">
                        <div className="col-md-6">
                          <table className="table table-sm">
                            <thead>
                              <tr>
                                <th className="w-50">Судья атаки</th>
                                <th>Красный</th>
                                <th>Синий</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{this.props.currentFight.attack_judge_1.first_name} {this.props.currentFight.attack_judge_1.last_name}</td>
                                <td>{round.red_attack_judge_1_points}</td>
                                <td>{round.blue_attack_judge_1_points}</td>
                              </tr>
                              <tr>
                                <td>{this.props.currentFight.attack_judge_2.first_name} {this.props.currentFight.attack_judge_2.last_name}</td>
                                <td>{round.red_attack_judge_2_points}</td>
                                <td>{round.blue_attack_judge_2_points}</td>
                              </tr>
                              <tr>
                                <td>{this.props.currentFight.attack_judge_3.first_name} {this.props.currentFight.attack_judge_3.last_name}</td>
                                <td>{round.red_attack_judge_3_points}</td>
                                <td>{round.blue_attack_judge_3_points}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="col-md-6">
                          <table className="table table-sm">
                            <thead>
                              <tr>
                                <th className="w-50">Судья защиты</th>
                                <th>Красный</th>
                                <th>Синий</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{this.props.currentFight.defence_judge_1.first_name} {this.props.currentFight.defence_judge_1.last_name}</td>
                                <td>{round.red_defence_judge_1_points}</td>
                                <td>{round.blue_defence_judge_1_points}</td>
                              </tr>
                              <tr>
                                <td>{this.props.currentFight.defence_judge_2.first_name} {this.props.currentFight.defence_judge_2.last_name}</td>
                                <td>{round.red_defence_judge_2_points}</td>
                                <td>{round.blue_defence_judge_2_points}</td>
                              </tr>
                              <tr>
                                <td>{this.props.currentFight.defence_judge_3.first_name} {this.props.currentFight.defence_judge_3.last_name}</td>
                                <td>{round.red_defence_judge_3_points}</td>
                                <td>{round.blue_defence_judge_3_points}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </div>
                    </div>
                  </div>
                )}


            </div>
          </div>
                      */}



      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    currentFight: state.currentFight,
    rounds: state.rounds,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    judgesAttackVsProtection: () => dispatch(judgesAttackVsProtection()), // Я добавил
    createjudgesAttackVsProtection: ( judge_id , judge , fighter_id , fighter , action_type) => dispatch(createjudgesAttackVsProtection(judge_id , judge , fighter_id , fighter , action_type)), // Я добавил
    requestCurrentFight: () => dispatch(requestCurrentFight()),
    requestRounds: (fightId) => dispatch(requestRounds(fightId)),
    startFight: (id) => dispatch(startFight(id)),
    finishFight: (id) => dispatch(finishFight(id)),
    updateRound: (id, data) => dispatch(updateRound(id, data)),
    startRound: (id) => dispatch(startRound(id)),
    pauseRound: (id) => dispatch(pauseRound(id)),
    stopRound: (id) => dispatch(stopRound(id)),
    createRound: (fightId, number) => dispatch(createRound(fightId, number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
