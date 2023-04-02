import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const useTitle = (initialtitle) => {
    const [title, setTitle] = useState(initialtitle);
    const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

const Title = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <>
            <div className="App">
                <p>hello world!</p>
            </div>
            <Link to="/"><button>go to home</button></Link>
        </>
    );
};

export default Title;
