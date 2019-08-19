import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount(){
        const firebaseConfig = {
            apiKey: 'AIzaSyC7-et8zvdWnICzmcjooIMZPTR2xYfNGe8',
            authDomain: 'manager-ce9e0.firebaseapp.com',
            databaseURL: 'https://manager-ce9e0.firebaseio.com',
            projectId: 'manager-ce9e0',
            storageBucket: '',
            messagingSenderId: '68437776092',
            appId: '1:68437776092:web:33fd6ac5aaab36ce'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
            <LoginForm />
            </Provider>
        );
    }
}
export default App;