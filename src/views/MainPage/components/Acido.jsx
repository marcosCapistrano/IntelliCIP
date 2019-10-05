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

import acidoStyle from "assets/jss/components/acidoStyle";
import tanque from "assets/img/acido/tanque.jpg";

class Acido extends React.Component {
  render() {
    const { classes } = this.props;

    
    return (
      <Card>
        <CardHeader color='primary' style={{ textAlign: 'center' }}>Despejamento de Acido</CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img src={tanque} alt="..." className={classes.image} />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h1>Primeira parte do Processo de Limpeza</h1>
              <h2>Acido é despejado para limpar o tanque principal e os encanamentos</h2>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    )
  }
}

Acido.propTypes = {
  classes: PropTypes.object
};

export default withStyles(acidoStyle)(Acido);
