import React, { Component } from 'react';
import {combinedReducers, createStore } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";


const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})


class Dashboard extends React.Component{
render()

};

const store = createStore(reducers)

export default Dashboard;