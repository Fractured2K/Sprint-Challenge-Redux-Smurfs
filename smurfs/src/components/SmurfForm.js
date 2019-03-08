import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
	state = {
		smurf: {
			name: "",
			age: "",
			height: ""
		}
	};

	handleChanges = e => {
		this.setState({
			smurf: {
				...this.state.smurf,
				[e.target.name]: e.target.value
			}
		});
	};

	addSmurf = e => {
		e.preventDefault();

		this.props.addSmurf(this.state.smurf);

		this.setState({
			smurf: {
				name: "",
				age: "",
				height: ""
			}
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.addSmurf}>
					<input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Name"
						onChange={this.handleChanges}
					/>
					<input
						type="number"
						name="age"
						value={this.state.age}
						placeholder="age"
						onChange={this.handleChanges}
					/>
					<input
						type="number"
						name="height"
						value={this.state.height}
						placeholder="Height"
						onChange={this.handleChanges}
					/>
					<button>Add Smurf</button>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{ addSmurf }
)(SmurfForm);
