import React from "react";

// styled components
import { StyledAppBar } from "./styles";

// atomic components
import { SearchInput } from "~views/Components/Atoms/SearchInput";

// theme lib
import { Typography } from "@material-ui/core";

const Header = props => {
  const {
    title,
    searchValue,
    handleSearchInputChanges,
    callSearchFunction,
    handleKeyDown
  } = props;

  return (
    <StyledAppBar position="static">
      <Typography variant="h4">{title}</Typography>
      <div>
        <SearchInput
          value={searchValue}
          changeInput={handleSearchInputChanges}
          clickedSubmit={callSearchFunction}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </StyledAppBar>
  );
};

export { Header };
