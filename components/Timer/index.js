import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import Button from './Button';

class Timer extends React.Component{
	/*constructor(props) {
		super(props);
		this.state = {
			
		};
	}*/
	render() {
		return(
			<View style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<View style={styles.upper}>
					<Text style={styles.time}>25:00</Text>
				</View>
				<View style={styles.lower}>
					<Button
						iconName='play-circle'
						onPress={() => Alert.alert('Start Timer!')}
					/>
					<Button
						iconName='stop-circle'
						onPress={() => Alert.alert('Stop Timer!')}
					/>
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
		fontSize: 120,
		fontWeight: '100'
	}
});

export default Timer;