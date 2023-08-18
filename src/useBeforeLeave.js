import React from "react";
import {Link} from 'react-router-dom';
import useBeforeLeave from "@smooks/use-before-leave";

const BeforeLeave = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);
  return (
    <>
      <div className="App">
        <h1>Hello</h1>
      </div>
      <Link to="/"><button>go to home</button></Link>
    </>
  );
};

export default BeforeLeave