import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <p>Hello world!</p>
            <Link to="/Input"><button>go to useInput page</button></Link>
            <Link to="/Tab"><button>go to useTab page</button></Link>
            <Link to="/Title"><button>go to useTitle page</button></Link>
            <Link to="/Click"><button>go to useClick page</button></Link>
            <Link to="/Confirm"><button>go to useConfirm page</button></Link>
            <Link to="/PreventLeave"><button>go to usePreventLeave</button></Link>
            <Link to="/BeforeLeave"><button>go to useBeforeLeave</button></Link>
            <Link to="/FadeIn"><button>go to useFadeIn</button></Link>
            <Link to="/Network"><button>go to useNetwork</button></Link>
            <Link to="/Notification"><button>go to useNotification</button></Link>
        </div>
    )
}

export default Home;