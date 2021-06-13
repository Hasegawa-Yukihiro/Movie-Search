import React from "react";

//  hooks
import { useHooks } from "./hooks";

//  styled components
import { MovieContentWrapper } from "./styles";

// atomic components
import { MovieContent } from "~views/Components/Molecules/MovieContent";
import { Header } from "~views/Components/Organisms/Header";
import { Footer } from "~views/Components/Organisms/Footer";

/**
 * @description Homeのテンプレートコンポート
 * @param title Headerのtitle
 */
const HomeTemplate = props => {
  const { title } = props;

  //  hooks
  const { stateData, handler, searchInputRef } = useHooks();

  return (
    <div>
      <Header
        title={title}
        callSearchFunction={handler.callSearchFunction}
        handleKeyDown={handler.handleKeyDown}
        searchInputRef={searchInputRef}
        fetchAction={handler.fetchAction}
      />
      <MovieContentWrapper>
        {stateData.movies &&
          stateData.movies.map((movie, i) => (
            <MovieContent
              key={i}
              movieTitle={movie.Title}
              img={movie.Poster}
              year={movie.Year}
            />
          ))}
      </MovieContentWrapper>
      <Footer />
    </div>
  );
};

export { HomeTemplate };
