import React, { useEffect } from 'react';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import {taskMiddleware} from 'react-palm/tasks';


const reducers = combineReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Maps(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            addDataToMap({
                datasets: {
                  info: {
                    label: 'Sample Taxi Trips in New York City',
                    id: 'test_trip_data'
                  },
                  data: sampleTripData
                },
                option: {
                  centerMap: true,
                  readOnly: false
                },
                config: sampleConfig
              })
              )

        return () => {
            cleanup
        }
    }, [input])

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
            <Maps></Maps>
        </Provider>
    )
}


export default Dashboard;