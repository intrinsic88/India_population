import React, { useEffect,useState } from 'react';
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

    const [sampleTripData, setsampleTripData] = useState();
      const sampleConfig = {
        visState: {
          filters: [
            {
              id: 'me',
              dataId: 'state_population',
              name: 'population',
              type: 'number',
              enlarged: true
            }
          ]
        }
      }; 
    
    const getData = ()=>{
        Axios.get(
            "/api/states/all"
        ).then((response)=>{
            console.log(response.data.users)
           return response.data.users;
        })
        .catch(()=>{

        })
    }; 
    
    const async setDispatch = ()

    useEffect(() => {
        
        const data = getData();
        if(data){
        setsampleTripData(getData())
        console.log(getData())
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
            }
    }, [dispatch ,sampleTripData])

    return(
    <KeplerGl 
    id='state_population' 
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