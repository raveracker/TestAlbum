/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
    componentDidMount() {
      const firebaseConfig = {
        apiKey: 'AIzaSyDsVF06ASYKo9GokZPLaqyawjLMswJcO2k',
        authDomain: 'managertesting.firebaseapp.com',
        databaseURL: 'https://managertesting.firebaseio.com',
        projectId: 'managertesting',
        storageBucket: 'managertesting.appspot.com',
        messagingSenderId: '337458426062',
        appId: '1:337458426062:web:50bd6cc465c3349a2d209f'
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
    // eslint-disable-next-line no-undef
    render() {
      const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
        return (
          <Provider store={store}>
              <Router />
          </Provider>
    );
  }
}
export default App;
