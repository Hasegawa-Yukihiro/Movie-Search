import React from "react";

//  theme lib
import {
  InputBase,
  fade,
  makeStyles,
  createStyles,
  IconButton
} from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = props => {
  const { value, clickedSubmit, changeInput, handleKeyDown } = props;

  // styles
  const classes = makeStyles(theme =>
    createStyles({
      search: {
        display: "flex",
        alignItems: "center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        padding: theme.spacing(1)
      },
      iconButton: {
        padding: 0
      },
      inputBase: {
        marginLeft: theme.spacing(1)
      }
    })
  )();

  return (
    <div className={classes.search}>
      <IconButton className={classes.iconButton} onClick={clickedSubmit}>
        <FontAwesomeIcon
          className={classes.faIcon}
          style={{ width: "20px", height: "100%" }}
          fixedWidth
          icon={["fas", "search"]}
        />
      </IconButton>
      <InputBase
        placeholder="Search…"
        value={value}
        className={classes.inputBase}
        onChange={changeInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export { SearchInput };
