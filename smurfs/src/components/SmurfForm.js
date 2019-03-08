import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
	state = {
		smurf: {
			name: "",
			age: "",
			height: ""
		},
		errors: ""
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

		if (
			this.state.smurf.name === "" ||
			this.state.smurf.age === "" ||
			this.state.smurf.height === ""
		)
			return this.setState({ errors: "All fields required" });

		this.props.addSmurf(this.state.smurf);

		this.setState(prevState => ({
			smurf: {
				...prevState.smurf,
				name: "",
				age: "",
				height: ""
			}
		}));
	};

	render() {
		return (
			<div>
				<p>{this.state.errors}</p>
				<form onSubmit={this.addSmurf}>
					<input
						type="text"
						name="name"
						value={this.state.smurf.name}
						placeholder="Name"
						onChange={this.handleChanges}
					/>
					<input
						type="number"
						name="age"
						value={this.state.smurf.age}
						placeholder="age"
						onChange={this.handleChanges}
					/>
					<input
						type="text"
						name="height"
						value={this.state.smurf.height}
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
