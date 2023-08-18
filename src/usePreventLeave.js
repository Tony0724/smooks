import React from "react";
import {Link} from 'react-router-dom';
import usePreventLeave from "@smooks/use-prevent-leave";

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