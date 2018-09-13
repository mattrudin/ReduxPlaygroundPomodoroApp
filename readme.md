# ReduxPlaygroundPomodoroApp
Playground app for Redux in a React-Native app

Tags: *reactjs*, *react-native*, *react-redux*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)



## 1. Instructions
[How to integrate Redux into your application with React Native and Expo](https://medium.freecodecamp.org/how-to-integrate-redux-into-your-application-with-react-native-and-expo-ec37c9ca6033)  


## 2. Lessons learned
### Expo CLI 2.0
[Expo CLI 2.0 released](https://blog.expo.io/expo-cli-2-0-released-a7a9c250e99c)  

### Can't find variable self
Currently (at the date of this writing) a common issue. Can be fixed with the downgrading of "whatwg-fetch".
```javascript
npm add whatwg-fetch@2.0.4
```
[Thread to the solution](https://forums.expo.io/t/cant-find-variable-self/13547/7)  
### componentWillReceiveProps() alternative
(The app uses still the deprecated version and has to be updated to the alternative solution)  
[Replacing ‘componentWillReceiveProps’ with ‘getDerivedStateFromProps’](https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607)  

### Stateless components with arrow function
This might seem trivial...
Instead of this:
```javascript
const Button = () => {
	return(
		<TouchableOpacity>
			I'm a Button, press me!
		</TouchableOpacity>
	)
}
```
Do this, without the return keyword (take a look a the parenthesis):
```javascript
const Button = () => (
	<TouchableOpacity>
		I'm a Button, press me!
	</TouchableOpacity>
)
```