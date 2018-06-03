import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// reduxthunk = middleware thus need applyMiddleware
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAYrW35qU5vq7ozc3yLPxycfOOBZRbSklA',
      authDomain: 'manager-aaa3a.firebaseapp.com',
      databaseURL: 'https://manager-aaa3a.firebaseio.com',
      projectId: 'manager-aaa3a',
      storageBucket: 'manager-aaa3a.appspot.com',
      messagingSenderId: '354385453027'
    };
    firebase.initializeApp(config);
  }

  render() {
    // the blank object would pre-populate email or password area
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
