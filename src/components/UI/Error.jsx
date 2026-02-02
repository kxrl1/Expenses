import React from 'react';
import { createPortal } from "react-dom";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import "./Error.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="footer">
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
};

const Error = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const overlayRoot = document.getElementById("overlay-root");

  const targetBackdrop = backdropRoot || document.body;
  const targetOverlay = overlayRoot || document.body;

  return (
    <>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        targetBackdrop
      )}

      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        targetOverlay
      )}
    </>
  );
};

export default Error;