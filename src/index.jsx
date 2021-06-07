import React from "react";
import ReactDOM from "react-dom";

//  providers
import Providers from "./views/Providers";

//  Route
import OrigRoute from "./views/Route/";

//  lib
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);
import "../public/style.css";

ReactDOM.render(
  <Providers>
    <OrigRoute />
  </Providers>,
  document.getElementById("root")
);
