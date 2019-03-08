import {
	GET_SMURF_START,
	GET_SMURF_SUCCESS,
	GET_SMURF_FAILURE
} from "../actions";

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
