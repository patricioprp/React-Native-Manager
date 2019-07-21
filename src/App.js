import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import redux from './reducers';

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
        return(
            <Provider store={createStore(redux)}>
               <View>
                   <Text>
                       holaaaa
                   </Text>
               </View>
            </Provider>
        );
    }
}
export default App;