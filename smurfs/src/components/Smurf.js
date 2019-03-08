import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

import "./Smurf.css";

class Smurf extends Component {
	deleteSmurf = () => {
		this.props.deleteSmurf(this.props.smurf.id);
	};

	render() {
		return (
			<div className="smurf">
				<h1>{this.props.smurf.name}</h1>
				<p>
					Age: <strong>{this.props.smurf.age}</strong>
				</p>
				<p>
					Height: <strong>{this.props.smurf.height}</strong>
				</p>
				<button onClick={this.deleteSmurf}>Delete</button>
			</div>
		);
	}
}

export default connect(
	null,
	{ deleteSmurf }
)(Smurf);
