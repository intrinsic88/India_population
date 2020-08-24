import React, { useEffect } from 'react';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import {taskMiddleware} from 'react-palm/tasks';
import {addDataToMap} from 'kepler.gl/actions';
import Axios from 'axios';


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
      const sampleConfig = {
        visState: {
          filters: [
            {
              id: 'me',
              dataId: 'test_trip_data',
              name: 'tpep_pickup_datetime',
              type: 'timeRange',
              enlarged: true
            }
          ]
        }
      }; 
    
    const getData = ()=>{
        Axios.get({
            url:"/api/state/all"
        }).then((response)=>{
            console.log(response)
        })
    };  
    useEffect(() => {
        getData
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
                config: {}
              })
              )
    }, [dispatch ,sampleTripData])

    return(
    <KeplerGl 
    id='population' 
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
    width={1200}
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