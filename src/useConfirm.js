import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom';

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const Confirm = () => {
  const deleteWorld = () => console.log("deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <>
      <div className="App">
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
      <Link to="/"><button>go to home</button></Link>
    </>
  );
};

export default Confirm;
