import React, { Component } from 'react';
import {combinedReducers } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";


const reducers = combinedReducers({
    keplerGl: keplerGLReducer
})


class Dashboard extends React.Component{
render()

};

const store = createStor

export default Dashboard;