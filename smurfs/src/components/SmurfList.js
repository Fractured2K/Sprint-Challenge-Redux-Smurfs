import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "../components/Smurf";

import "./SmurfList.css";

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		if (this.props.fetchingSmurfs) return <div>Loading smurfs....</div>;
		if (this.props.smurfs.length === 0)
			return <div>Sorry, there are no smurfs</div>;

		return (
			<div className="smurfs">
				{this.props.smurfs.map(smurf => (
					<Smurf key={smurf.id} smurf={smurf} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	fetching: state.fetchingSmurfs,
	smurfs: state.smurfs
});

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(SmurfList);
