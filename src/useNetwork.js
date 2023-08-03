import React, { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom';

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status;
};

const Network = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <>
      <div className="App">
        <h1>{onLine ? "OnLine" : "OffLine"}</h1>
      </div>
      <Link to="/"><button>go to home</button></Link>
    </>
  );
};

export default Network;