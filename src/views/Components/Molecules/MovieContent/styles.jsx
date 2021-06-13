import styled from "styled-components";

const Wrapper = styled.div(({ theme }) => {
  return {
    textAlign: "center",
    padding: theme.spacing(3),
    maxWidth: "350px"
  };
});

const StyledImg = styled.img(({ theme }) => {
  return {
    margin: theme.spacing(2, 0),
    width: "100%",
    minHeight: "450px"
  };
});

export { Wrapper, StyledImg };
