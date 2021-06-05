import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({});

const OrigThemeProvider = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default OrigThemeProvider;
