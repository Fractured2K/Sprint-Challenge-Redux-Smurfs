import axios from "axios";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
	dispatch({ type: GET_SMURF_START });

	axios
		.get("http://localhost:3333/smurfs")
		.then(res => {
			dispatch({
				type: GET_SMURF_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_SMURF_FAILURE,
				payload: err
			});
		});
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = smurf => dispatch => {
	dispatch({
		type: ADD_SMURF_START
	});

	return axios
		.post("http://localhost:3333/smurfs", smurf)
		.then(res => {
			dispatch({
				type: ADD_SMURF_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: ADD_SMURF_FAILURE,
				payload: err.response.data.error
			});
		});
};

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = id => dispatch => {
	dispatch({
		type: DELETE_SMURF_START
	});

	axios
		.delete(`http://localhost:3333/smurfs/${id}`)
		.then(res => {
			dispatch({
				type: DELETE_SMURF_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_SMURF_FAILURE,
				payload: err.response.data.error
			});
		});
};
