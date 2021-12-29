import React from "react";
import TailSpin from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

function Loader() {
  return (
    <LoaderContainer>
      <TailSpin type="TailSpin" arialLabel="loading-indicator" />
    </LoaderContainer>
  );
}

export default Loader;
