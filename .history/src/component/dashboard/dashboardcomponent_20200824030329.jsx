import React, { useEffect,useState } from 'react';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import {taskMiddleware} from 'react-palm/tasks';
import {addDataToMap} from 'kepler.gl/actions';
import KeplerGlSchema from 'kepler.gl/schemas';
import Axios from 'axios';

const customizedKeplerGlReducer = keplerGLReducer.initialState({
  uiState: {readOnly: true, centerMap: true}
});

const reducers = combineReducers({
    keplerGl: customizedKeplerGlReducer
})
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Maps(){

    const dispatch = useDispatch();

    const [savedDatasets, setsavedDatasets] = useState();
    const [savedConfig, setsavedConfig] = useState();
    const [mapToLoad, setmapToLoad] = useState({info:"", datasets:[], configs:{}, option:{
      centerMap: true,
      readOnly: true,
    }});
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

        const data = require("../../keplergl2.json");
        const options = {
          centerMap: true,
          readOnly: true,
        } 

        const mapData = KeplerGlSchema.load(data.datasets, data.config)
        setsavedDatasets(data.datasets);
        setsavedConfig(data.config);
        setsavedInfos(data.info);
        const mapDataOpt = {...mapData, option:options, info:data.info}
        setmapToLoad(mapDataOpt);
    }; 
    
    const setDispatch= async ()=> {
        dispatch(
            addDataToMap(mapToLoad)
              )
    };

    useEffect(() => {
        setDispatch()
    }, [dispatch,mapToLoad])

    useEffect(()=>{
        getData()
    }, [])

    return(
    <KeplerGl 
    id='state_population' 
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
    style={{width:}}
    height={800}
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