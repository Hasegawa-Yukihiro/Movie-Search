import styled from "styled-components";

export const MovieContentWrapper = styled.div(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  };
});
