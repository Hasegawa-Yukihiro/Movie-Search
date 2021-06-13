import React from "react";

//  theme lib
import { Portal } from "@material-ui/core";

//  styled components
import { StyledSlide, StyledSnackbarProvider } from "./styles";

const OrigSnackbarProvider = props => {
  const snackbarProps = {
    children: props.children,
    maxSnack: 3,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    autoHideDuration: 3000,
    TransitionComponent: function TransitionComponent(props) {
      return <StyledSlide {...props} />;
    }
  };
  return (
    <Portal>
      <StyledSnackbarProvider {...snackbarProps} />
    </Portal>
  );
};

export default OrigSnackbarProvider;
