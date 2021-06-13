import React from "react";

// styled components
import { StyledFooter } from "./styles";

// theme lib
import { Typography } from "@material-ui/core";

const Footer = props => {
  return (
    <StyledFooter position="static">
      <Typography>&copy; 2021 Hasegawa</Typography>
    </StyledFooter>
  );
};

export { Footer };
