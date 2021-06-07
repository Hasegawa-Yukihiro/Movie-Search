import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({});

const OrigThemeProvider = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default OrigThemeProvider;
