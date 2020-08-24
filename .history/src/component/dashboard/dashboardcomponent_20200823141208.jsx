import React, { Component } from 'react';
import {combinedReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import {} from 'react-re'


const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})


class Dashboard extends React.Component{
render()

};

const store = createStore(reducers, {}, applyMiddleware)

export default Dashboard;