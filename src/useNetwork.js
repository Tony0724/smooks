import React from "react";
import {Link} from 'react-router-dom';
import useNetwork from "@smooks/use-network"

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