import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <p>Hello world!</p>
            <Link to="/Input"><button>go to useInput page</button></Link>
            <Link to="Tab"><button>go to useTab page</button></Link>
        </div>
    )
}

export default Home;