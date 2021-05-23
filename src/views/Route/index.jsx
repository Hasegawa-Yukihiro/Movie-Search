import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//  assets
import { pagePathname } from "~views/assets/utils/pathname";

//  Pages
import Home from "~views/Pages/Home";

const OrigRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={pagePathname.Home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default OrigRoute;
