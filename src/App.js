import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store/store';
import ShowDetail from './ShowDetaile';

const store = configureStore();

export default class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Provider store={store} >
                <ShowDetail />
            </Provider>
            
        );
    }
}