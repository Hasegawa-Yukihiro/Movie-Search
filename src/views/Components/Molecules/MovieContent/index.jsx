import React from "react";

// styled components
import { Wrapper, StyledImg } from "./styles";

//  theme lib
import { Typography } from "@material-ui/core";

const MovieContent = props => {
  const { movieTitle, img, year } = props;
  return (
    <Wrapper>
      <Typography variant="h5">
        {movieTitle ? movieTitle : "movieTitle"}
      </Typography>
      <StyledImg src={img} alt={`The movie titled:${img}`} />
      <Typography>{year ? year : "year"}</Typography>
    </Wrapper>
  );
};

export { MovieContent };
