import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.hide}></div>;
};
const ModelOverLay = (props) => {
  return <div className="modal">{props.children}</div>;
};

// const portalElm = document.getElementById("overLay");
// const portalElm = document.querySelector("#overLay");

const Modal = (props) => {
  // return (
  //   <React.Fragment>
  //     {ReactDOM.createPortal(<BackDrop />, portalElm)}
  //     {ReactDOM.createPortal(
  //       <ModelOverLay>{props.children}</ModelOverLay>,
  //       portalElm
  //     )}
  //   </React.Fragment>
  // );
  return (
    <React.Fragment>
      <BackDrop hide={props.hide} />
      <ModelOverLay>{props.children}</ModelOverLay>
    </React.Fragment>
  );
};
export default Modal;
