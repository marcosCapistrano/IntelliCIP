import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import Acido from '../MainPage/components/Acido'
import processoPageStyle from "assets/jss/views/processoPageStyle";

class ProcessoPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax small image={require("assets/img/parallax.png")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer justify='center'>
                <Button className={classes.buttonIniciar} color='success'>Iniciar Processo</Button>
                

                <Acido></Acido> 
              </GridContainer>
            </div>
        </div>
      </div>
    );
  }
}

ProcessoPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(processoPageStyle)(ProcessoPage);
