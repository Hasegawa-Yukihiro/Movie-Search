import React from "react";

export const useHooks = () => {
  // constants
  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

  //  states
  const [movies, setMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  /** @description 検索欄入力値の取得 */
  const handleSearchInputChanges = React.useCallback(e => {
    setSearchValue(e.target.value);
  }, []);

  /** @description 検索欄の入力値リセット */
  const resetInputField = React.useCallback(() => {
    setSearchValue("");
  }, []);

  /** @description 検索アイコン押下後のsubmit */
  const callSearchFunction = React.useCallback(
    e => {
      e.preventDefault();
      console.log(searchValue);
      search(searchValue);
      resetInputField();
    },
    [searchValue, resetInputField]
  );

  const search = React.useCallback(searchValue => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
        } else {
          console.log(jsonResponse.Error);
        }
      });
  }, []);

  const handleKeyDown = React.useCallback(
    e => {
      if (e.keyCode === 13) {
        search(searchValue);
        resetInputField();
      }
    },
    [searchValue, search, resetInputField]
  );

  React.useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  const stateData = React.useMemo(() => {
    return {
      movies,
      searchValue
    };
  }, [movies, searchValue]);

  const handler = React.useMemo(() => {
    return {
      handleSearchInputChanges,
      callSearchFunction,
      handleKeyDown
    };
  }, [handleSearchInputChanges, callSearchFunction, handleKeyDown]);

  return {
    stateData,
    handler
  };
};
