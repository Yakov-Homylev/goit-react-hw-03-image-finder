import React, { Component } from "react";
import { Overlay, ModalContainer } from "./Modal.styled";

export class Modal extends Component {
  render() {
    console.log(this.props);
    return (
      <Overlay>
        <ModalContainer>
          <img src="" alt="" />
        </ModalContainer>
      </Overlay>
    );
  }
}

export default Modal;
