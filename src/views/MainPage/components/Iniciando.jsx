import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";

import iniciandoStyle from "assets/jss/components/iniciandoStyle.js";

class Iniciando extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      start: false,
      text: 'Pressione o botao para iniciar o processo...',
      countdown: 3,
    }
  }

  start() {
    this.setState({
      text: 'O processo começará dentro de 3 segundos...'
    })
  }

  run() {
    this.setState({
      text: 'O processo foi iniciado!'
    })
  }

  stop() {
    this.setState({
      text: 'Pressione o botao para iniciar o processo...'
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color='primary' style={{ textAlign: 'center' }}>Iniciando Processo</CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
              <h1>{this.state.text}</h1>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    )
  }
}

Iniciando.propTypes = {
  classes: PropTypes.object
};

export default withStyles(iniciandoStyle)(Iniciando);
