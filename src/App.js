import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import Modal from '@material-ui/core/Modal'

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return [
    'Quality Check', 
    'Appropriate Formulation', 
    'Relevant Reasons',
    'Acceptable Reasons',
    'All Components Addressed',
    'Sufficient Reasons for Components',
    'Contradictions'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Would the following statement be acceptable without exception, in all circumstances? \n IF XXXXXXXX \n THEN XXXXXXX';
    case 1:
      return 'Is everything formulated appropriately so that the statement above works grammatically?';
    case 2:
      return `Is each of your reasons relevant for this particular conclusion?`;
    case 3:
      return `Is each of your reasons acceptable? (That is: not obviously questionable)`;
    case 4:
      return `Are all components of a complex conclusion addressed by reasons?`;
    case 5:
      return `Are the reasons provided to justify a particular component of the conclusion sufficient to justify this component?`;
    case 6:
      return `Are there contradictions among the statements used in your argument?`;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      // <div>
      // <div>
      //   <Button className={classes.Button}
      //   onClick={this.openModal}>Show Popup</Button>
      // </div>
      <div className={classes.root}>
        {/* <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography paragraph gutterBottom>{getStepContent(index).split ('\n').map ((item, i) => <h6 key={i}>{item}</h6>)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>
              <ul>
              <li>If any of the above is problematic, reformulate your reasons or conclusion or add reasons. </li>
              <li>Cut statements into several boxes and simplify as much as possible. </li>
              <li>Reconsider the overall structure of your argument.</li>
              </ul>
              The soundness of your argument depends on it.
              </Typography>
            <Button className={classes.button}>
              Done
            </Button>
          </Paper>
        )} */}
      </div>
      //</div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);