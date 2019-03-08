import {
	GET_SMURF_START,
	GET_SMURF_SUCCESS,
	GET_SMURF_FAILURE,
	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAILURE
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
		case GET_SMURF_START:
			return {
				...state,
				fetchingSmurfs: true,
				error: null
			};
		case GET_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				fetchingSmurfs: false,
				error: null
			};
		case GET_SMURF_FAILURE:
			return {
				...state,
				fetchingSmurfs: false,
				error: action.payload
			};
		case ADD_SMURF_START:
			return {
				...state,
				fetchingSmurfs: true,
				error: null
			};
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				smurfs: [...action.payload],
				fetchingSmurfs: false,
				error: null
			};
		case ADD_SMURF_FAILURE:
			return {
				...state,
				fetchingSmurfs: false,
				error: action.payload
			};
		default:
			return state;
	}
};
