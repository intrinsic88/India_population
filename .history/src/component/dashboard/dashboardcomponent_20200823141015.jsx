import React, { Component } from 'react';
import {combinedReducers } from 'redux'
import keplerGLReducer from "kepler.gl"
const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})


class Dashboard extends React.Component{
render()

};


export default Dashboard;