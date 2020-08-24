import React, { Component } from 'react';
import {combinedReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider } from 'react-redux';
import KeplerGl from 'kepler.gl';


const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware);

const Dashbaord =()=>{

    return(
        <Provider store={store}>
            <Maps>

            </Maps>
        </Provider>
    )
}


export default Dashboard;