import { START_TIMER, RESTART_TIMER, ADD_SECOND } from './types';

const TIMER_DURATION = 1500;


// Initial State
const initialState = {
	isPlaying: false,
	elapsedTime: 0,
	timerDuration: TIMER_DURATION
};


// Helper Functions
	// No.1: Starts the timer
const applyStartTimer = (state) => {
	return {
		...state,
		isPlaying: true
	};
}

	// No.2: Stop the timer and sets default state
const applyRestartTimer = (state) => {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0,
		timerDuration: TIMER_DURATION
	};
}

	// No.3: If true, it adds an additional second, else return default state and stops timer
const applyAddSecond = (state) => {
	if (state.elapsedTime < TIMER_DURATION) {
		return {
			...state,
			elapsedTime: state.elapsedTime + 1
		};
	} else {
		return {
			...state,
			isPlaying: false
		};
	}
}


// Reducer Function
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_TIMER:
			return applyStartTimer(state);
		case RESTART_TIMER:
			return applyRestartTimer(state);
		case ADD_SECOND:
			return applyAddSecond(state);
		default:
			return state;
	}
}

export default reducer;