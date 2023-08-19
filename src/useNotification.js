import React from "react";
import {Link} from 'react-router-dom'
import useNotification from '@smooks/use-notify';

const Notification = () => {
    const trigerNotification = useNotification("Can I steal your kimchi?", {
        body: "I love kimchi, don't you?"
    });
    return (
        <div className="App">
            <button onClick={trigerNotification}>Hello</button>
            <Link to="/"><button>go to home</button></Link>
        </div>
    );
};

export default Notification;