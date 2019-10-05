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

import acidoStyle from "assets/jss/components/acidoStyle";

class Iniciando extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      start: false
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color='primary' style={{ textAlign: 'center' }}>Enxague</CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
              {/* <CustomLinearProgress
                variant="determinate"
                color="info"
                value={this.state.value}>
              </CustomLinearProgress> */}

              <h1>Momento de limpeza do tanque principal</h1>
              <h2>Nessa etapa, o valor de saída deve ser igual a de entrada, representando a limpeza do tanque</h2>
            </GridItem>
          </GridContainer>

          <GridContainer style={((this.props.saida >= (this.props.controle - this.props.controle * (5 / 100)))
            && (this.props.saida <= (this.props.controle + this.props.controle * (5 / 100)))) ? { color: 'green' } : { color: 'red' }}>
            <GridItem xs={6} sm={6} md={6} style={{ textAlign: 'center' }}>
              <h1>Valor de controle</h1>
              <h2>{this.props.controle}</h2>
            </GridItem>

            <GridItem xs={6} sm={6} md={6} style={{ textAlign: 'center' }}>
              <h1>Valor de saida</h1>
              <h2>{this.props.saida}</h2>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card >
    )
  }
}

Iniciando.propTypes = {
  classes: PropTypes.object
};

export default withStyles(acidoStyle)(Iniciando);
