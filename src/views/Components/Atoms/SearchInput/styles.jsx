import React from "react";
import {
  InputBase,
  fade,
  AppBar,
  makeStyles,
  createStyles
} from "@material-ui/core/";

const SearchInput = () => {
  const classes = makeStyles(theme =>
    createStyles({
      root: {
        padding: theme.spacing(5),
        marginTop: "20px"
      }
    })
  )();
  return (
    <div className={classes.root}>
      <p>aaaa</p>
      <AppBar position="static">
        <InputBase placeholder="Search…" />
      </AppBar>
    </div>
  );
};
export default SearchInput;
