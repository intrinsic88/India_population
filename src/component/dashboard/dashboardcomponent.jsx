import React, { useEffect, useState } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGLReducer from "kepler.gl/reducers";
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { taskMiddleware } from 'react-palm/tasks';
import { addDataToMap } from 'kepler.gl/actions';
import KeplerGlSchema from 'kepler.gl/schemas';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { Grid } from '@material-ui/core';

const customizedKeplerGlReducer = keplerGLReducer.initialState({
  uiState: { readOnly: true, centerMap: true }
});

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer
})
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Maps() {

  const dispatch = useDispatch();

  const [savedDatasets, setsavedDatasets] = useState();
  const [savedConfig, setsavedConfig] = useState();

  const [mapToLoad, setmapToLoad] = useState({
    info: "", datasets: [], configs: {}, option: {
      centerMap: true,
      readOnly: true,
    }
  });
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

  const getData = async () => {

    const data = require("../../keplergl2.json");
    const options = {
      centerMap: true,
      readOnly: true,
    }

    const mapData = KeplerGlSchema.load(data.datasets, data.config)
    setsavedDatasets(data.datasets);
    setsavedConfig(data.config);
    setsavedInfos(data.info);
    const mapDataOpt = { ...mapData, option: options, info: data.info }
    setmapToLoad(mapDataOpt);
  };

  const setDispatch = async () => {
    dispatch(
      addDataToMap(mapToLoad)
    )
  };

  useEffect(() => {
    setDispatch()
  }, [dispatch, mapToLoad])

  useEffect(() => {
    getData()
  }, [])

  return (

    <div style={{ position: "absolute", width: "64.5%", height: "70%", marginTop: '2%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <KeplerGl
            id='state_population'
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
            width={width}
            height={height}
          />
        )}
      </AutoSizer>
    </div>

  )
}

const Dashboard = () => {
  const [iframesrc, setiframesrc] = useState();

  useEffect(() => {
    console.log(process.env.REACT_APP_DASH_SRC)
    setiframesrc(process.env.REACT_APP_DASH_SRC)
  }, [])

  return (
    <Provider store={store}>
      <Grid container>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <div style={{width:'1232px', height:'580px', position:'relative'}}>
          <div style={{ position: "absolute", width: "100%", height: "100%", marginTop: '2%' }}>
            <AutoSizer>
              {({ height, width }) => (
                <iframe src={iframesrc} height={height} width={width}> </iframe>
              )}
            </AutoSizer>
          </div>
          </div>
        </Grid>
        <br></br>
        <Grid item xs={12} lg={12} md={12} sm={12}>
        <Maps></Maps>
          </Grid>
      </Grid>
    </Provider >
  )
}


export default Dashboard;