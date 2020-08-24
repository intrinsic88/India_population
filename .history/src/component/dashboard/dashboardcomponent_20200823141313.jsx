import React, { Component } from 'react';
import {combinedReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import {} from 'react-redux'


const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware);

class Dashboard extends React.Component{
render()

};


function Map(){
    return<keplerGl id=
}

export default Dashboard;