import React from "react";

//  providers
import Router from "./Router";
// import ThemeProvider from "./Theme";

const Providers = props => {
  return (
    <Router>
      {/* <ThemeProvider> */}
      {props.children}
      {/* </ThemeProvider> */}
    </Router>
  );
};

export default Providers;
