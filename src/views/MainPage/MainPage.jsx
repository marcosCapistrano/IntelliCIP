import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import scrollToComponent from 'react-scroll-to-component';

import mainPageStyle from "assets/jss/views/mainPageStyle";

import Iniciando from './components/Iniciando'
import Acido from './components/Acido'
import RecircularAcido from './components/RecircularAcido'
import IniciandoEnxague from './components/IniciandoEnxague'
import Enxague from './components/Enxague'
import Terminar from './components/Terminar'

var app
var db
var firebaseConfig = {
  apiKey: "AIzaSyCKJoLfdTMmm1bJSxEcgCvod5uFyKDltZQ",
  authDomain: "intellicep.firebaseapp.com",
  databaseURL: "https://intellicep.firebaseio.com",
  projectId: "intellicep",
  storageBucket: "",
  messagingSenderId: "973576578669",
  appId: "1:973576578669:web:4ae86559f5fb1261670164"
}

var stepRef
var controlRef
var saidaRef


class MainPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startTime: new Date().getTime(),
      buttonClass: props.classes.buttonVisible,
      processClass: props.classes.processVisible,
      step: 'null',
      controle: 0,
      saida: 0,
    }
  }

  componentDidMount() {
    app = firebase.initializeApp(firebaseConfig)
    db = firebase.database()

    stepRef = db.ref('step')
    controlRef = db.ref('controle')
    saidaRef = db.ref('saida')

    stepRef.on('value', (snapshot) => {
      switch (snapshot.val()) {
        case 'initializing':
          scrollToComponent(this.Iniciando, { offset: -50, align: 'top', duration: 1500 })
          break;

        case 'acid':
          scrollToComponent(this.Acido, { offset: -50, align: 'top', duration: 1500 })
          this.Iniciando.run()
          break;

          case 'refill':
          scrollToComponent(this.RecircularAcido, { offset: -50, align: 'top', duration: 1500 })
          break;

          case 'initWash':
          scrollToComponent(this.IniciandoEnxague, { offset: -50, align: 'top', duration: 1500 })
          break;

          case 'wash':
          scrollToComponent(this.Enxague, { offset: -50, align: 'top', duration: 1500 })
          break;

          case 'end':
          scrollToComponent(this.Terminar, { offset: -50, align: 'top', duration: 1500 })
          this.Iniciando.stop()
          break;
      }
    })

     controlRef.on('value', (snapshot) => {
      this.setState({ controle: snapshot.val() })
    })

    saidaRef.on('value', (snapshot) => {
      this.setState({ saida: snapshot.val() })
    }) 
  }

  /* updateControlSeries(snapshot) {
    var date = (new Date().getTime() - this.state.startTime).toString();

    var newEntry = {
      date,
      control: snapshot.val().toString()
    }

    var newState = this.state.data
    newState.push(newEntry)

    this.setState({ data: newState }, console.log(this.state.data))

    console.log(this.state.datar)
    console.log(this.state.data)
    this.forceUpdate()
  } */

  startProcess(props) {
    db.ref('start').set(true)
    this.Iniciando.start()
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax small image={require("assets/img/capa.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <Button color='success' onClick={() => this.startProcess(this.props)}>Iniciar Processo</Button>

              <div className={classNames(this.state.processClass, classes.processMain)}>
                <GridContainer>
                  <GridItem className={classes.items} xs={12} sm={12} md={12}>
                    <Iniciando ref={(section) => { this.Iniciando = section; }}></Iniciando>
                  </GridItem>

                  <GridItem className={classes.items} xs={12} sm={12} md={12}>
                    <Acido ref={(section) => { this.Acido = section; }}></Acido>
                  </GridItem>

                  <GridItem className={classes.items} xs={12} sm={12} md={12}>
                    <RecircularAcido ref={(section) => { this.RecircularAcido = section; }}></RecircularAcido>
                  </GridItem>

                  <GridItem className={classes.items} xs={12} sm={12} md={12}>
                    <IniciandoEnxague ref={(section) => { this.IniciandoEnxague = section; }}></IniciandoEnxague>
                  </GridItem>

                  <GridItem className={classes.items} xs={12} sm={12} md={12}>
                    <Enxague controle={this.state.controle} saida={this.state.saida} ref={(section) => { this.Enxague = section; }}></Enxague>
                  </GridItem>

                  <GridItem className={classes.items} xs={12} sm={12} md={12}>
                    <Terminar ref={(section) => { this.Terminar = section; }}></Terminar>
                  </GridItem>
                  {/* <LineChart width={600} height={300} data={this.state.datar}>
                    <Line type="monotone" dataKey="control" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                  </LineChart> */}

                </GridContainer>
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(mainPageStyle)(MainPage);
