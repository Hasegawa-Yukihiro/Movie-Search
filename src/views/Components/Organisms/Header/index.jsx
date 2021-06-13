import React from "react";

// styled components
import { StyledAppBar } from "./styles";

// atomic components
import { SearchInput } from "~views/Components/Atoms/SearchInput";
import { Title } from "~views/Pages/Home";

// theme lib
import { Typography } from "@material-ui/core";

/**
 * @description Headerコンポーネント
 * @param title タイトル ex) Movie Search
 * @param searchInputRef 検索欄に入力した値
 * @param callSearchFunction 検索アイコン押下後のsubmit
 * @param handleKeyDown エンターキー押下後のイベント
 * @param fetchAction タイトル押下後のfetchイベント
 */
const Header = props => {
  const { callSearchFunction, handleKeyDown, searchInputRef, fetchAction } =
    props;

  //  hooks
  const title = React.useContext(Title);

  return (
    <StyledAppBar position="static">
      <Typography
        variant="h4"
        style={{ cursor: "pointer" }}
        onClick={fetchAction}
      >
        {title}
      </Typography>
      <div>
        <SearchInput
          clickedSubmit={callSearchFunction}
          handleKeyDown={handleKeyDown}
          searchInputRef={searchInputRef}
        />
      </div>
    </StyledAppBar>
  );
};

export { Header };
