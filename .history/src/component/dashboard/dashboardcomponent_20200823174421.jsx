import React, { useEffect } from 'react';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import {taskMiddleware} from 'react-palm/tasks';
import {addDataToMap} from 'kepler.gl/actions';


const reducers = combineReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Maps(){

    const dispatch = useDispatch();

    const sampleTripData = {
        fields: [
          {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
          {name: 'pickup_longitude', format: '', type: 'real'},
          {name: 'pickup_latitude', format: '', type: 'real'}
        ],
        rows: [
          ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
          ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
          ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576]
        ]
      };

    useEffect(() => {
        dispatch(
            addDataToMap({
                datasets: {
                  info: {
                    label: 'Population by State',
                    id: 'state_population'
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