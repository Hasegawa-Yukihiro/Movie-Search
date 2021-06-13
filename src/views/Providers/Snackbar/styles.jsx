import React from "react";
import { useSnackbar, SnackbarProvider } from "notistack";

//  hooks
import { useHistory } from "react-router-dom";

//  theme lib
import {
  Button,
  createStyles,
  IconButton,
  makeStyles,
  withStyles,
  Slide
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  utils
import { pagePathname } from "~utils/pathname";

export const ActionButtons = props => {
  //  hooks
  const history = useHistory();

  return (
    <React.Fragment>
      <StyledButton onClick={() => history.push(pagePathname.Home)}>
        Home
      </StyledButton>
    </React.Fragment>
  );
};

const StyledButton = withStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(0, 0.5)
    }
  })
)(props => <Button {...props} variant="contained" size="small" />);

export const CloseButton = () => {
  //  hooks
  const { closeSnackbar } = useSnackbar();

  //  styles
  const classes = makeStyles(theme =>
    createStyles({
      faIcon: {
        color: theme.colorPicker("white")
      }
    })
  )();

  return (
    <IconButton onClick={() => closeSnackbar()}>
      <FontAwesomeIcon
        size="sm"
        icon={["fas", "times-circle"]}
        className={classes.faIcon}
      />
    </IconButton>
  );
};

export const StyledSlide = withStyles(theme =>
  createStyles({
    root: {}
  })
)(props => <Slide {...props} />);

export const StyledSnackbarProvider = withStyles(theme =>
  createStyles({
    containerRoot: {
      whiteSpace: "pre-line"
    }
  })
)(props => <SnackbarProvider {...props} />);
