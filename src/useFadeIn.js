import React from "react";
import {Link} from 'react-router-dom';
import useFadeIn from '@smooks/use-fadein';

const FadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <>
      <div className="App">
        <h1 {...fadeInH1}>Hello</h1>
        <p {...fadeInP}>Loream ipsum lalalala</p>
      </div>
      <Link to="/"><button>go to home</button></Link>
    </>
  );
};

export default FadeIn;
