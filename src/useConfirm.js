import React from "react";
import {Link} from 'react-router-dom';
import useConfirm from "@smooks/use-confirm";

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
