import React from "react";
import { LoadButton } from "./Button.styled";

function Button({ name = "Click", onClick }) {
  return <LoadButton onClick={onClick}>{name}</LoadButton>;
}

export default Button;
