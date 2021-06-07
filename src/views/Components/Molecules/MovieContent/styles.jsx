import styled from "styled-components";

//  theme lib
// import { createStyles, withStyles } from "@material-ui/core";

const Wrapper = styled.div(({ theme }) => {
  return {
    textAlign: "center",
    padding: theme.spacing(3)
  };
});

const StyledImg = styled.img(({ theme }) => {
  return {
    margin: theme.spacing(2, 0),
    maxWidth: "300px",
    minHeight: "450px"
  };
});

export { Wrapper, StyledImg };
