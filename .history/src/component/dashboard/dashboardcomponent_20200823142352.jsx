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
            <Map>

            </Map>
        </Provider>
    )
}


function Map(){
    return(
    <KeplerGl 
    id='population' 
    mapboxApiAcccessToken={process.env.REACT_APP_MAPBOX_API} 
    width={window.innerWidth}
    height={window.innerHeight}
    />)
}

export default Dashboard;