import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './actions';
import Button from './Button';
import { formatTime } from './utils';

class Timer extends React.Component{

	componentWillReceiveProps(nextProps) {
		const currentProps = this.props;
		if (!currentProps.isPlaying && nextProps.isPlaying) {
			//Start the interval
			const timerInterval = setInterval(() => {
				currentProps.addSecond();
			}, 1000);
			this.setState({
				timerInterval
			});
		} else if (currentProps.isPlaying && !nextProps.isPlaying) {
			//Stop the interval
			clearInterval(this.state.timerInterval);
		}
	}

	render() {

		const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer } = this.props;

		const button = isPlaying ? <Button
										iconName='stop-circle'
										onPress={restartTimer}
									/> :
									<Button
										iconName='play-circle'
										onPress={startTimer}
									/>

		return(
			<View style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<View style={styles.upper}>
					<Text style={styles.time}> {formatTime(timerDuration - elapsedTime)} </Text>
				</View>
				<View style={styles.lower}>
					{button}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	lower: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	time: {
		color: '#fff',
		fontSize: 100,
		fontWeight: '100'
	}
});

const mapStateToProps = (state) => {
	const { isPlaying, elapsedTime, timerDuration } = state;
	return {
		isPlaying,
		elapsedTime,
		timerDuration
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		startTimer: bindActionCreators(actions.startTimer, dispatch),
		restartTimer: bindActionCreators(actions.restartTimer, dispatch),
		addSecond: bindActionCreators(actions.addSecond, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);