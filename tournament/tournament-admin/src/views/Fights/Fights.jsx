import React, { Component } from "react";
import './Fights.scss';
import { NavLink, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import Select from 'react-select'
import {
  requestFighters,
  requestFights,
  requestJudges,
  createFight,
  updateFight,
  deleteFight,
} from "../../actions/index";

class Fights extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newFightForm: false,
      newFightRedId: null,
      newFightBlueId: null,
      newFightAttackJudge1: null,
      newFightAttackJudge2: null,
      newFightAttackJudge3: null,
      newFightDefenceJudge1: null,
      newFightDefenceJudge2: null,
      newFightDefenceJudge3: null,
      newFightMaxRounds: '',
      newFightRoundDuration: '',
      newFightDefencePointsForPressure: '',
      newFightAttackPointsForPressure: '',
    };
  }

  componentDidMount() {
    this.props.requestJudges();
    this.props.requestFighters();
    this.props.requestFights();

  }

  showNewFightForm() {
    this.setState({
      newFightForm: true
    })
  }

  hideNewFightForm() {
    this.setState({
      newFightForm: false
    })
  }


  fightersForSelect() {
    return this.props.fighters && [].concat(this.props.fighters).map((fighter, index) => {
      return { value: fighter.id, label: fighter.first_name + ' ' + fighter.last_name }
    }) || [];
  }

  judgesForSelect() {
    return this.props.judges && [].concat(this.props.judges).map((judge, index) => {
      return { value: judge.id, label: judge.first_name + ' ' + judge.last_name }
    }) || [];
  }

  createFight(e) {
    this.props.createFight(
      this.state.newFightRedId ? this.state.newFightRedId.value : null,
      this.state.newFightBlueId ? this.state.newFightBlueId.value : null,
      this.state.newFightAttackJudge1 ? this.state.newFightAttackJudge1.value : null,
      this.state.newFightAttackJudge2 ? this.state.newFightAttackJudge2.value : null,
      this.state.newFightAttackJudge3 ? this.state.newFightAttackJudge3.value : null,
      this.state.newFightDefenceJudge1 ? this.state.newFightDefenceJudge1.value : null,
      this.state.newFightDefenceJudge2 ? this.state.newFightDefenceJudge2.value : null,
      this.state.newFightDefenceJudge3 ? this.state.newFightDefenceJudge3.value : null,
      this.state.newFightMaxRounds,
      this.state.newFightRoundDuration,
      this.state.newFightAttackPointsForPressure,
      this.state.newFightDefencePointsForPressure,
    )
    e.preventDefault();
  }

  deleteFight(id) {
    this.props.deleteFight(id)
  }
  newFightRedIdHandleChange = newFightRedId => {
    this.setState({ newFightRedId });
  };

  newFightBlueIdHandleChange = newFightBlueId => {
    this.setState({ newFightBlueId });
  };

  newFightAttackJudge1HandleChange = newFightAttackJudge1 => {
    this.setState({ newFightAttackJudge1 });
  };

  newFightAttackJudge2HandleChange = newFightAttackJudge2 => {
    this.setState({ newFightAttackJudge2 });
  };

  newFightAttackJudge3HandleChange = newFightAttackJudge3 => {
    this.setState({ newFightAttackJudge3 });
  };

  newFightDefenceJudge1HandleChange = newFightDefenceJudge1 => {
    this.setState({ newFightDefenceJudge1 });
  };

  newFightDefenceJudge2HandleChange = newFightDefenceJudge2 => {
    this.setState({ newFightDefenceJudge2 });
  };

  newFightDefenceJudge3HandleChange = newFightDefenceJudge3 => {
    this.setState({ newFightDefenceJudge3 });
  };

  newFightMaxRoundsHandleChange = event => {
    this.setState({ newFightMaxRounds: event.target.value });
  };

  newFightRoundDurationHandleChange = event => {
    this.setState({ newFightRoundDuration: event.target.value });
  };

  newFightDefencePointsForPressureHandleChange = event => {
    this.setState({ newFightDefencePointsForPressure: event.target.value });
  };

  newFightAttackPointsForPressureHandleChange = event => {
    this.setState({ newFightAttackPointsForPressure: event.target.value });
  };


  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-2">
              <div className="card-body">
                <button className="btn float-right btn-secondary btn-sm  " onClick={!this.state.newFightForm ? this.showNewFightForm.bind(this) : this.hideNewFightForm.bind(this)}>{!this.state.newFightForm ? "Добавить" : "Отменить"}</button>

                <h5 className="card-title">Все бои</h5>

                <div className="clearfix"></div>

                {this.props.fightCreateErrors && this.props.fightCreateErrors.length > 0 &&
                  <div className="row mb-2">
                    <div className="col-md-12 ">
                      {this.props.fightCreateErrors.map((item, index) =>
                        <div className="alert alert-danger" key={index.toString()}>
                          {item}
                        </div>
                      )}
                    </div>
                  </div>
                }

                {this.state.newFightForm &&
                  <div className="row">
                    <div className="col-md-6 offset-md-6">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightRedId}
                              onChange={this.newFightRedIdHandleChange}
                              options={this.fightersForSelect()}
                              placeholder='Боец в красном углу...'
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightBlueId}
                              onChange={this.newFightBlueIdHandleChange}
                              options={this.fightersForSelect()}
                              placeholder='Боец в синем углу...'
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightAttackJudge1}
                              onChange={this.newFightAttackJudge1HandleChange}
                              options={this.judgesForSelect()}
                              placeholder='Первый судья атаки...'
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightDefenceJudge1}
                              onChange={this.newFightDefenceJudge1HandleChange}
                              options={this.judgesForSelect()}
                              placeholder='Первый судья защиты...'
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightAttackJudge2}
                              onChange={this.newFightAttackJudge2HandleChange}
                              options={this.judgesForSelect()}
                              placeholder='Второй судья атаки...'
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightDefenceJudge2}
                              onChange={this.newFightDefenceJudge2HandleChange}
                              options={this.judgesForSelect()}
                              placeholder='Второй судья защиты...'
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightAttackJudge3}
                              onChange={this.newFightAttackJudge3HandleChange}
                              options={this.judgesForSelect()}
                              placeholder='Третий судья атаки...'
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <Select
                              value={this.state.newFightDefenceJudge3}
                              onChange={this.newFightDefenceJudge3HandleChange}
                              options={this.judgesForSelect()}
                              placeholder='Третий судья защиты...'
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control"
                              placeholder="Количество раундов"
                              value={this.state.newFightMaxRounds}
                              onChange={this.newFightMaxRoundsHandleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control"
                              placeholder="Длительность раунда в секундах"
                              value={this.state.newFightRoundDuration}
                              onChange={this.newFightRoundDurationHandleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control"
                              placeholder="Количество очков за атаку"
                              value={this.state.newFightAttackPointsForPressure}
                              onChange={this.newFightAttackPointsForPressureHandleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control"
                              placeholder="Количество очков за защиту"
                              value={this.state.newFightDefencePointsForPressure}
                              onChange={this.newFightDefencePointsForPressureHandleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-2">
                            <button className="btn btn-secondary btn-block  " onClick={this.createFight.bind(this)}>Добавить</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                }

                <div>
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Красный угол</th>
                        <th>Синий угол</th>
                        <th>Статус</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>

                      {[].concat(this.props.fights).map((fight, index) =>

                        <tr key={index.toString()}>
                          <td>
                            {fight.id}
                          </td>
                          <td>
                            <p><span className="text-danger">{fight.red_fighter.first_name} {fight.red_fighter.last_name}</span> {fight.red_points}</p>
                          </td>
                          <td>
                            <p><span className="text-primary">{fight.blue_fighter.first_name} {fight.blue_fighter.last_name}</span> {fight.blue_points}</p>
                          </td>
                          <td>
                            {fight.status == 0 && "Запланирован"}
                            {fight.status == 1 && "Текущий"}
                            {fight.status == 2 && "Завершен"}
                            {fight.started_at}
                          </td>
                          <td>
                            <div className="btn-group float-right" >
                              {/* {fight.status == 1 &&
                                <button className="btn btn-danger" onClick={this.finishFight.bind(this, fight.id)}>Завершить</button>
                              }
                              {fight.status == 0 &&
                                <button className="btn btn-primary" onClick={this.startFight.bind(this, fight.id)}>Начать</button>
                              } */}
                              {fight.status == 0 &&
                                <button className="btn btn-danger " onClick={this.deleteFight.bind(this, fight.id)}>Удалить</button>
                              }
                              <NavLink to={{ pathname: '/fights/' + fight.id }} className="btn ">Детали</NavLink>
                            </div>
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
    fights: state.fights,
    fightCreateErrors: state.fightCreateErrors,
    judges: state.judges,
    fighters: state.fighters,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    requestFighters: () => dispatch(requestFighters()),
    requestJudges: () => dispatch(requestJudges()),
    requestFights: () => dispatch(requestFights()),
    createFight: (
      fightRedId,
      fightBlueId,
      fightAttackJudge1,
      fightAttackJudge2,
      fightAttackJudge3,
      fightDefenceJudge1,
      fightDefenceJudge2,
      fightDefenceJudge3,
      fightMaxRounds,
      fightRoundDuration,
      fightAttackPointsForAction,
      fightDefencePointsForAction
    ) => dispatch(createFight(
      fightRedId,
      fightBlueId,
      fightAttackJudge1,
      fightAttackJudge2,
      fightAttackJudge3,
      fightDefenceJudge1,
      fightDefenceJudge2,
      fightDefenceJudge3,
      fightMaxRounds,
      fightRoundDuration,
      fightAttackPointsForAction,
      fightDefencePointsForAction
    )),
    updateFight: (id, data) => dispatch(updateFight(id, data)),
    deleteFight: (id) => dispatch(deleteFight(id)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fights);
