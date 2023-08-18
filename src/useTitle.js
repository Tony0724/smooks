import React from "react";
import {Link} from 'react-router-dom';
import useTitle from "@smooks/use-title";

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
