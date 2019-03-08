import React, { Component } from "react";

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
				[e.target.name]: e.target.value
			}
		});
	};

	render() {
		return (
			<div>
				<form action="">
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
						type="number"
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

export default SmurfForm;
