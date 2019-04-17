// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';
// import blue from '@material-ui/core/colors/blue';

// const styles = {
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// };

// class SimpleDialog extends React.Component {
//   handleClose = () => {
//     this.props.onClose(this.props.selectedValue);
//   };

//   handleListItemClick = value => {
//     this.props.onClose(value);
//   };

//   render() {
//     const { classes, onClose, selectedValue, ...other } = this.props;

//     return (
//       <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
//         <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
//         <div>

//         </div>
//       </Dialog>
//     );
//   }
// }

// SimpleDialog.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onClose: PropTypes.func,
//   selectedValue: PropTypes.string,
// };

// const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

// class SimpleDialogDemo extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };

//   handleClose = value => {
//     this.setState({ selectedValue: value, open: false });
//   };

//   render() {
//     return (
//       <div>
//         <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
//         <br />
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//           Open simple dialog
//         </Button>
//         <SimpleDialogWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onClose={this.handleClose}
//         />
//       </div>
//     );
//   }
// }

// export default SimpleDialogDemo;






import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StepContent from '@material-ui/core/StepContent';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'Quality Check #1',
  },
  {
    label: 'Quality Check #2',
  },
  {
    label: 'Quality Check #3',
  },
  {
    label: 'Quality Check #4',
  },
  {
    label: 'Quality Check #5',
  },
  {
    label: 'Quality Check #6',
  },
  {
    label: 'Quality Check #5',
  },
  {
    label: 'Tips',
  },

];

const styles = theme => ({
  root: {
    maxWidth: 300,
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    height: 50,
    backgroundColor: theme.palette.background.default,
  },

});

function getStepContent(step) {
  switch (step) {
    case 0:
      return ["IF [INSERT REASON]" ,
              "THEN [INSERT CONCLUSION]" ,
              "Would the following statement be acceptable without exception, " +
              "in all circumstances?"];
    case 1:
      return ["IF [INSERT REASON]" ,
              "THEN [INSERT CONCLUSION]" ,

              "Is everything formulated appropriately so that the statement " +
              "above works grammatically"];
    case 2:
      return ["IF [INSERT REASON]" ,
              "THEN [INSERT CONCLUSION]" ,

              "Is each of your reasons relevant for this particular conclusion?"];

    case 3:
      return ["IF [INSERT REASON]" ,
              "THEN [INSERT CONCLUSION]" ,

              "Is each of your reasons acceptable? (That is: not obviously " +
              "questionable"];

    case 4:
      return ["IF [INSERT REASON]" ,
              "THEN [INSERT CONCLUSION]" ,

              "Would the following statement be acceptable without exception, " +
              "in all circumstances?"];
    case 5:
      return ["IF [INSERT REASON] ",
              "THEN [INSERT CONCLUSION]",

              "Is everything formulated appropriately so that the statement " +
              "above works grammatically"];
    case 6:
      return ["IF [INSERT REASON]",
              "THEN [INSERT CONCLUSION]",

              "Is each of your reasons relevant for this particular conclusion?"];
    case 7:
      return ["If any of the above is problematic, reformulate your reasons or " +
              "conclusion or add reasons.",

              "Cut statements into several boxes and simplify as much as " +
              "possible.",

              "Reconsider the overall structure of your argument. The soundness " +
              "of your argument depends on it."];
    default:
      return 'Unknown step';
  }
}

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography> {tutorialSteps[activeStep].label} </Typography>
        </Paper>
        <Typography paragraph={true}> {getStepContent(activeStep)[0]} </Typography>
        <Typography paragraph={true} > {getStepContent(activeStep)[1]} </Typography>
        <Typography paragraph={true}> {getStepContent(activeStep)[2]} </Typography>


        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />

      </div>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
