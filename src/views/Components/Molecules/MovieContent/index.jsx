import React from "react";

// styled components
import { Wrapper, StyledImg } from "./styles";

//  theme lib
import { Typography } from "@material-ui/core";

//  assets
import NoImg from "~assets/img/no-image.png";

/**
 * @description 映画のタイトル・画像・公開年のコンテンツ
 * @param movieTitle 映画のタイトル
 * @param img 映画の画像
 * @param year 映画の公開年
 */
const MovieContent = props => {
  const { movieTitle, img, year } = props;
  return (
    <Wrapper>
      <Typography variant="h5">
        {movieTitle ? movieTitle : "movieTitle"}
      </Typography>
      <StyledImg
        src={img !== "N/A" ? img : NoImg}
        alt={`The movie titled:${img}`}
      />
      <Typography>{year ? year : "year"}</Typography>
    </Wrapper>
  );
};

export { MovieContent };
