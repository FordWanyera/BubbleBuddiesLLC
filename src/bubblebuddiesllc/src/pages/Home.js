import { NavLink, Outlet, Link } from 'react-router-dom'

export default function Home() {
    return(
        <>
        <div className="home">
            <h2>Home Page</h2>
        </div>

        <div className="links">
                <Link to="jane-hopkins">
                    <button>Jane Hopkins Login</button>
                </Link>

                <Link to="fda">
                    <button>FDA Login</button>
                </Link>

                <Link to="bavaria">
                    <button>Bavaria Login</button>
                </Link>
        </div>
        
        </>    
    )
}