import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === "function") {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    } else {
      return;
    }
  }, []);
};

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