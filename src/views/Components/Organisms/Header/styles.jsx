import React from "react";

import { AppBar, createStyles, withStyles } from "@material-ui/core";

export const StyledAppBar = withStyles(theme =>
  createStyles({
    root: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.spacing(2, 3)
    }
  })
)(props => <AppBar {...props} />);
