import React, { useEffect } from "react";
import { useRef } from "react";
import {Link} from 'react-router-dom';

const Click = () => {
    const sayHello = () => alert("Element was clicked!");
    const title = useClick(sayHello);
    return (
        <>
            <div className="App">
                <h1 ref={title}>Hello</h1>
            </div>
            <Link to="/"><button>go to home</button></Link>
        </>
    );
};

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
        element.current.addEventListener("click", onClick);
        }
        return () => {
        if (element.current) {
            element.current.removeEventListener("click", onClick);
        }
        };
    }, []);
    if (typeof onClick !== "function") {
        return;
    }
    return element;
};


export default Click