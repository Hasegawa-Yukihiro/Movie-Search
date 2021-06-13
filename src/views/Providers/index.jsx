import React from "react";

//  providers
import Router from "./Router";
import Theme from "./Theme";
import SnackbarProvider from "./Snackbar";

const Providers = props => {
  return (
    <Router>
      <Theme>
        <SnackbarProvider>{props.children}</SnackbarProvider>
      </Theme>
    </Router>
  );
};

export default Providers;
