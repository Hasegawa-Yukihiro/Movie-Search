import React from "react";
import ReactDOM from "react-dom";

//  providers
import Providers from "./views/Providers";

//  Route
import OrigRoute from "./views/Route/";

//  lib
import "../public/style.css";

ReactDOM.render(
  <Providers>
    <OrigRoute />
  </Providers>,
  document.getElementById("root")
);
