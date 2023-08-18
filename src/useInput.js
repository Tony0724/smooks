import {Link} from 'react-router-dom'
import useInput from '@smooks/use-input';

const Input = () => {
    const validator = (value) => !value.includes("@");
    const name = useInput("Mr.", validator);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name.props}/>
            <Link to="/"><button>go to home</button></Link>
        </div>
    );
};

export default Input;