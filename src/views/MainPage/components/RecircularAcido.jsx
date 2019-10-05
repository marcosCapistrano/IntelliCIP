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
        <CardHeader color='primary' style={{ textAlign: 'center' }}>Recirculando Acido</CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
              {/* <CustomLinearProgress
                variant="determinate"
                color="info"
                value={this.state.value}>
              </CustomLinearProgress> */}
              <h1>Nesse momento,bombeamos a solução de limpeza para seu reservatorio original, para reutilização posterior</h1>
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

export default withStyles(acidoStyle)(Iniciando);
