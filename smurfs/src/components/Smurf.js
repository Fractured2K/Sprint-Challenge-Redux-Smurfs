import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

class Smurf extends Component {
	deleteSmurf = () => {
		console.log(this.props.smurf.id);
	};

	render() {
		return (
			<div>
				<h1>{this.props.smurf.name}</h1>
				<p>{this.props.smurf.age}</p>
				<p>{this.props.smurf.height}</p>
				<button onClick={this.deleteSmurf}>Delete</button>
			</div>
		);
	}
}

export default connect(
	null,
	{ deleteSmurf }
)(Smurf);
