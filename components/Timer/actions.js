import { START_TIMER, RESTART_TIMER, ADD_SECOND } from './types';

const startTimer = () => {
	return {
		type: START_TIMER
	};
}

const restartTimer = () => {
	return {
		type: RESTART_TIMER
	};
}

const addSecond = () => {
	return {
		type: ADD_SECOND
	};
} 

const actionCreators = {
	startTimer,
	restartTimer,
	addSecond
};

export { actionCreators };