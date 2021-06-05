import React from "react";
import { Route, Switch } from "react-router-dom";

//  assets
import { pagePathname } from "~utils/pathname";

//  Pages
import Home from "~views/Pages/Home";

const OrigRoute = () => {
  return (
    <Switch>
      <Route exact path={pagePathname.Home} component={Home} />
    </Switch>
  );
};

export default OrigRoute;
