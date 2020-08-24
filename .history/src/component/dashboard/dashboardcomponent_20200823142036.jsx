import React, { Component } from 'react';
import {combinedReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import {} from 'react-redux'


const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware);

class Dashboard extends React.Component{
render(
    <Provider
)

};


function Map(){
    return(
    <keplerGl 
    id='population' mapboxApiAcccessToken={process.env.REACT_APP_MAPBOX_API} 
    width={window.innerWidth}
    height={window.innerHeight}
    />)
}

export default Dashboard;