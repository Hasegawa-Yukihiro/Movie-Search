import React from "react";

//  hooks
import { useHooks } from "./hooks";

//  styled components
import { MovieContentWrapper } from "./styles";

// atomic components
import { MovieContent } from "~views/Components/Molecules/MovieContent";
import { Header } from "~views/Components/Organisms/Header";

const HomeTemplate = props => {
  const { title } = props;

  //  hooks
  const { stateData, handler } = useHooks();

  return (
    <div>
      <Header
        title={title}
        searchValue={stateData.searchValue}
        handleSearchInputChanges={handler.handleSearchInputChanges}
        callSearchFunction={handler.callSearchFunction}
        handleKeyDown={handler.handleKeyDown}
      />
      <MovieContentWrapper>
        {stateData.movies &&
          stateData.movies.map((movie, i) => (
            <MovieContent key={i} movieTitle={movie.Title} img={movie.Poster} />
          ))}
      </MovieContentWrapper>
      <footer>footer</footer>
    </div>
  );
};

export { HomeTemplate };
