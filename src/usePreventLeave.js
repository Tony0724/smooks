import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const PreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <div className="App">
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
      <Link to="/"><button>go to home</button></Link>
    </>
  );
};

export default PreventLeave;