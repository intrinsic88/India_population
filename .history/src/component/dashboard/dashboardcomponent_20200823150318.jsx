import React, { Component } from 'react';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider } from 'react-redux';
import KeplerGl from 'kepler.gl';
import {} from 'react-palm/'


const reducers = combineReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Maps(){
    return(
    <KeplerGl 
    id='population' 
    mapboxApiAcccessToken={process.env.REACT_APP_MAPBOX_API} 
    width={window.innerWidth}
    height={window.innerHeight}
    />)
}

const Dashboard = ()=>{

    return(
        <Provider store={store}>
            {
                Maps()
            }
        </Provider>
    )
}


export default Dashboard;