import React, { Component } from "react";
import './Fight.scss';

import { connect } from "react-redux";
import {
	requestFight,
	finishFight,
	startFight
} from "../../actions/index";

class Fight extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.requestFight(id);
	}

	finishFight(id) {
		this.props.finishFight(id)
	}

	startFight(id) {
		this.props.startFight(id)
	}

	render() {
		let { fight } = this.props;
		console.log(fight)
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						{fight &&
							fight.red_fighter_id &&
							fight.blue_fighter_id &&
							fight.attack_judge_1_id &&
							fight.attack_judge_2_id &&
							fight.attack_judge_3_id &&
							fight.defence_judge_1_id &&
							fight.defence_judge_2_id &&
							fight.defence_judge_3_id &&
							<div className="card mt-2">
								<div className="card-body">

									<div className="btn-group float-right" >
										{/* <button className="btn btn-danger  btn-sm" onClick={this.finishFight.bind(this, fight.id)}>Завершить</button> */}
									</div>

									<h5 className="card-title">Бой {fight.id}</h5>

									<div>

										<div className="row">
											<div className="col-md-6">
												<p>Красный угол: <span className="text-danger"> {fight.red_fighter.first_name} {fight.red_fighter.last_name}</span> {fight.red_points} </p>
											</div>
											<div className="col-md-6">
												<p>Синий угол: <span className="text-primary"> {fight.blue_fighter.first_name} {fight.blue_fighter.last_name}</span> {fight.blue_points}</p>
											</div>
										</div>

										<div className="row">
											<div className="col-md-12">
												<p>Количество раундов: {fight.max_rounds}</p>
											</div>
											<div className="col-md-12">
												<p>Длительность раунда: {fight.round_duration}</p>
											</div>
											<div className="col-md-12">
												<p>Количество очков за атаку: {fight.attack_points_for_action}</p>
											</div>
											<div className="col-md-12">
												<p>Количество очков за защиту: {fight.defence_points_for_action}</p>
											</div>
										</div>




										{/* <button className="btn btn-primary mt-2 mb-2" onClick={this.createRound.bind(this, fight.id)}>Новый раунд</button> */}

										{fight.rounds && fight.rounds
											.sort(function (a, b) {
												if (a.number < b.number) { return 1; }
												if (a.number > b.number) { return -1; }
												return 0;
											}.bind(this))
											.map((round, index) =>
												<div className="card mt-2">
													<div className="card-body">
														<div className="btn-group mb-3 float-right" >
															{/* <button className="btn btn-primary  btn-sm" onClick={this.startRound.bind(this, round.id)}>Начать</button>
													<button className="btn btn-danger  btn-sm" onClick={this.pauseRound.bind(this, round.id)}>Остановить</button>
													<button className="btn btn-danger  btn-sm" onClick={this.finishRound.bind(this, round.id)}>Завершить</button> */}
														</div>


														{round.status == 1 &&
															<div className="mr-2 mb-3 float-right">
																{this.remainingTime(round.started_at, fight.round_duration)}
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
																			<th className="bg-danger text-white">Красный</th>
																			<th className="bg-primary text-white">Синий</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>{fight.attack_judge_1.first_name} {fight.attack_judge_1.last_name}</td>
																			<td>{round.red_attack_judge_1_points}</td>
																			<td>{round.blue_attack_judge_1_points}</td>
																		</tr>
																		<tr>
																			<td>{fight.attack_judge_2.first_name} {fight.attack_judge_2.last_name}</td>
																			<td>{round.red_attack_judge_2_points}</td>
																			<td>{round.blue_attack_judge_2_points}</td>
																		</tr>
																		<tr>
																			<td>{fight.attack_judge_3.first_name} {fight.attack_judge_3.last_name}</td>
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
																			<th className="bg-danger text-white">Красный</th>
																			<th className="bg-primary text-white">Синий</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>{fight.defence_judge_1.first_name} {fight.defence_judge_1.last_name}</td>
																			<td>{round.red_defence_judge_1_points}</td>
																			<td>{round.blue_defence_judge_1_points}</td>
																		</tr>
																		<tr>
																			<td>{fight.defence_judge_2.first_name} {fight.defence_judge_2.last_name}</td>
																			<td>{round.red_defence_judge_2_points}</td>
																			<td>{round.blue_defence_judge_2_points}</td>
																		</tr>
																		<tr>
																			<td>{fight.defence_judge_3.first_name} {fight.defence_judge_3.last_name}</td>
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
							</div>
						}
					</div>
				</div>
			</div>
		);
	}

}


const mapStateToProps = state => {
	return {
		fight: state.fight
	};
};

function mapDispatchToProps(dispatch) {
	return {
		requestFight: (id) => dispatch(requestFight(id)),
		startFight: (id) => dispatch(startFight(id)),
		finishFight: (id) => dispatch(finishFight(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Fight);
