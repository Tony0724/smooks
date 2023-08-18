import React from "react";
import {Link} from 'react-router-dom';
import useClick from '@smooks/use-click';

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

export default Click