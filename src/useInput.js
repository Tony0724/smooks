import { useState } from "react";
import {Link} from 'react-router-dom'

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if(typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const Input = () => {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
            <Link to='/'><button>go to home</button></Link>
        </div>
    );
};

export default Input;