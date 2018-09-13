import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/Timer/reducers';
import Timer from './components/Timer/index';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

export default App;
