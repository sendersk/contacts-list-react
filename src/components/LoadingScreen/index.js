import React from "react";
import Loader from "react-loader-spinner";
import { Wrapper } from "./styled";

function LoadingScreen() {
  return (
    <Wrapper>
      <Loader type="Rings" color="#fff" height={200} width={200} />
    </Wrapper>
  );
}

export default LoadingScreen;
