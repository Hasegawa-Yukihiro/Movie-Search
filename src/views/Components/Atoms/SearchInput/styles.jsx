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

/**
 * @description
 * @param clickedSubmit submit押下後のイベント
 * @param handleKeyDown 指定キー押下後のイベント
 * @param searchInputRef inputのref属性
 */
const SearchInput = props => {
  const { clickedSubmit, handleKeyDown, searchInputRef } = props;

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
        className={classes.inputBase}
        onKeyDown={handleKeyDown}
        inputRef={searchInputRef}
      />
    </div>
  );
};
export { SearchInput };
