import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "../components/Smurf";

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		if (this.props.smurfs.length === 0)
			return <div>Loading smurfs....</div>;

		return (
			<div>
				{this.props.smurfs.map((smurf, i) => (
					<Smurf key={i} smurf={smurf} />
				))}
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
