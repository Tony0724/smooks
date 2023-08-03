import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }

    const { current } = element;
    if (current) {
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

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
