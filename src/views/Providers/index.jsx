import React from "react";

//  providers
import Router from "./Router";
import Theme from "./Theme";

const Providers = props => {
  return (
    <Router>
      <Theme>{props.children}</Theme>
    </Router>
  );
};

export default Providers;
