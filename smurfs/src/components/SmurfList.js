import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div>
				<h1>Hello</h1>
				{console.log(this.props)}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	smurfs: state.smurfs
});

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(SmurfList);
