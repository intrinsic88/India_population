import React, { useEffect,useState } from 'react';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import {taskMiddleware} from 'react-palm/tasks';
import {addDataToMap} from 'kepler.gl/actions';
import KeplerGlSchema from 'kepler.gl/schemas';
import Axios from 'axios';

const reducers = combineReducers({
    keplerGl: keplerGLReducer
})
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Maps(){

    const dispatch = useDispatch();

    const [savedDatasets, setsavedDatasets] = useState();
    const [savedConfig, setsavedConfig] = useState();
    const [mapToLoad, setmapToLoad] = useState({info:"", datasets:[], configs:{}});
    const [savedInfos, setsavedInfos] = useState();


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
    
    const getData = async ()=>{
        // Axios.get(
        //     "../../../public/keplergl.json"
        // ).then((response)=>{
        //     setsampleTripData(response.data.users)
        // })
        // .catch(()=>{

        // })

        const data = require("../../keplergl.json");
        setsavedDatasets(data.datasets);
        setsavedConfig(data.config);
        setsavedInfos(data.info);
        setmapToLoad({info:data.info, datasets:data.datasets, config:data.config});
        setmapToLoad(KeplerGlSchema.load(data.datasets, data.config))
    }; 
    
    const setDispatch= async ()=> {
        const data = require("../../keplergl.json");

        dispatch(
            addDataToMap({
                // datasets
                datasets: {
                  info: data.,
                  data: data.datasets 
                },
                // option
                option: {
                  centerMap: true,
                  readOnly: false
                },
                // config
                config: data.config
              })
              )
    };

    useEffect(() => {
        setDispatch()
    }, [dispatch,savedInfos, savedDatasets, savedConfig])

    useEffect(()=>{
        getData()
    }, [])

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