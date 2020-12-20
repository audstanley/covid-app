import React, { useReducer, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import axios from 'axios';
import usStates from "./usStates";
import {  AppBar, 
          Toolbar, 
          IconButton,
          Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
am4core.options.autoDispose = true;

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 2,
    height: 30,
    marginTop: "5px",
    padding: '0px 5px 0px 5px',
  },
  icon: {
    padding: '0px 0px 0px 0px',
    border: '0px 0px 0px 0px'
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  drawer: {
    width: "180px"
  },
  content: {
    marginLeft: "240px"
  }
});

function PositivityChart(props) {
  const chart = useRef(null);
  if(props && props.props && chart && chart.current) {
    let x = am4core.create("chartdiv", am4charts.XYChart);
    x.data = props.props;
    x.paddingRight = 40;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;
  }
  
  useEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);
    
    if(props && props.props ) {
      x.data = props.props;
      x.paddingRight = 40;
      let dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = x.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      x.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      x.scrollbarX = scrollbarX;

      chart.current = x;
    }
    return () => {
      chart.current && chart.current.dispose();
      x.dispose();
    };
  });

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}

function DeathChart(props) {
  const chart = useRef(null);
  
  //let [data, setData] = useState([]);
  console.log('DeathChart running...')
  if(props && props.props && chart && chart.current) {
    console.log('ok..');
    let x = am4core.create("chartdiv2", am4charts.XYChart);
    x.data = props.props;
    x.paddingRight = 40;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;
  }
  
  useEffect(() => {
    let x = am4core.create("chartdiv2", am4charts.XYChart);
    
    if(props && props.props ) {
      x.data = props.props;
      x.paddingRight = 40;

      let dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = x.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      x.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      x.scrollbarX = scrollbarX;

      chart.current = x;
    }
    return () => {
      chart.current && chart.current.dispose();
      x.dispose();
    };
  });

  return (
    <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
  );
}

function ICUChart(props) {
  const chart = useRef(null);
  
  //let [data, setData] = useState([]);
  console.log('DeathChart running...')
  if(props && props.props && chart && chart.current) {
    console.log('ok..');
    let x = am4core.create("chartdiv3", am4charts.XYChart);
    x.data = props.props;
    x.paddingRight = 40;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;
  }
  
  useEffect(() => {
    let x = am4core.create("chartdiv3", am4charts.XYChart);
    
    if(props && props.props ) {
      x.data = props.props;
      x.paddingRight = 40;

      let dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = x.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      x.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      x.scrollbarX = scrollbarX;

      chart.current = x;
    }
    return () => {
      chart.current && chart.current.dispose();
      x.dispose();
    };
  });

  return (
    <div id="chartdiv3" style={{ width: "100%", height: "500px" }}></div>
  );
}

const renderICUChartData = (ICUChartData) => <div><h2>Currently in ICU:</h2><ICUChart props={ ICUChartData }/> </div>;

function App() {
  const classes = useStyles();
  const reducer = (state, action) => {
    switch (action.type) {
      case "init":
        return { ...state };
      default:
        return { ...state };
    }
  };
  let [state, dispatch] = useReducer(reducer, { left: false, 
                                                req: false, 
                                                data: [], 
                                                chartData: [], 
                                                deathChartData: [], 
                                                ICUChartData: [], 
                                                notes: "", 
                                                link: "Home", 
                                                currentState: "" });

  if(!state.req) {
    state.req = true;
    axios.get('https://api.covidtracking.com/v1/states/info.json')
      .then(data => {
        state.data = data.data;
        dispatch(state, { type: "init" });
      });
  }
  
  const toggleDrawer = (anchor, open) => (event) => {
    console.log(`EVENT: ${event}`);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch(state);
  };

  // renderData will extract ignore the event, but use the USA - state - to make changes to the Base UI component 
  // thus is a factory function.
  const renderData = (unitedState) => (event) => {
    let chartData = [];
    let deathChartData = [];
    let ICUChartData = [];
    state.chartData = [];
    state.deathChartData = [];
    state.ICUChartData = [];
    state.link = unitedState;
    let NotesObj = state.data.filter(e => e.state === usStates[unitedState])[0];
    state.currentState = NotesObj.state;
    state.notes = NotesObj.notes;
    axios.get(`https://api.covidtracking.com/v1/states/${usStates[unitedState]}/daily.json`)
      .then(USStateData => {
        //console.log(JSON.stringify(USStateData,null,2));
        for(let i = 0; i < USStateData.data.length; i++) {
          chartData.push({ date: USStateData.data[i].dateChecked, name: `name-${i}`, value: USStateData.data[i].positive })
          deathChartData.push({ date: USStateData.data[i].dateChecked, name: `name-${i}`, value: USStateData.data[i].death })
          ICUChartData.push({ date: USStateData.data[i].dateChecked, name: `name-${i}`, value: USStateData.data[i].inIcuCurrently })
        }
        state.chartData = chartData.filter(e => e.date !== null);
        state.deathChartData = deathChartData.filter(e => e.date !== null);
        state.ICUChartData = ICUChartData.filter(e => e.date !== null && e.value !== null);
        console.log(JSON.stringify(state.ICUChartData,null,2));
        dispatch(state);
      })
    
  }
  const homePage = () => () => {
    state.link = "Home";
    dispatch(state);
  }
  
  const list = (anchor) => (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        {['Home'].map((text) => (
          <ListItem button dense key={text} onClick={homePage(text)} className={classes.root}>
            <ListItemIcon className={classes.icon}>
              <HomeIcon style={{ color: "blue", fontSize: "1rem" }}/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>

        {/* This is the list of states on the left drawer */}
          {Object.keys(usStates).map((text) => (
            <ListItem button dense 
                key={text} 
                onClick={renderData(text)}
                className={classes.root}
            >
              <ListItemIcon className={classes.icon}>
                <LocationSearchingIcon style={{ color: "blue", fontSize: "1rem" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </div>
  );

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <React.Fragment key="left">
              <MenuIcon onClick={toggleDrawer("left", true)} />
              <div className={classes.drawer}>
                <Drawer variant="permanent" anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                  {list("left")}
                </Drawer>
              </div>
            </React.Fragment> 
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            United States Covid API
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Render the home page until click dispatch */}
      {
        (state.link === "Home")?
          <div>
            <div style={{marginLeft: '200px', height: '2000px', maxHeight: '1500'}} dangerouslySetInnerHTML={{__html: '<iframe style="width: 100%; height: 100%; overflow: hidden;" src="https://www.arcgis.com/apps/opsdashboard/index.html#/409af567637846e3b5d4182fcd779bea" width="100" height="100" scrolling="yes">Iframes '}}></div>
            <div style={{marginLeft: '220px', marginTop: '1rem', marginBottom: '1rem'}}>
              Credit: John Hopkins University 
            </div>
          </div>
        :
        (state.currentState)?
          <div className={ classes.content }>
            <h1>
            { state.link }
            </h1>
              <h2>
                Positivity Rate:
              </h2>
              <PositivityChart props={ state.chartData }/>
              <h2>
                Death Rate:
              </h2>
              <DeathChart props={ state.deathChartData }/>
              
              {
                (state.ICUChartData.length > 10)?
                 renderICUChartData(state.ICUChartData)
                :
                  ""
              }
            <h2>
              Notes:
            </h2>
              <ReactMarkdown>{ state.notes }</ReactMarkdown>
          </div>
          :
          ""
      }
    </div>
  );
}

export default App;
