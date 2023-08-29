import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import {useContext} from 'react'

const Nav = () => {
    const {logout} = useContext(UserContext)

    return(
        <div className="nav--container">
            <Link to="/">
                <h2>
                    Login
                </h2>
            </Link>
            <Link to="/profile">
                <h2>
                    Profile
                </h2>
            </Link>

            <Link to="/public" >
                <h2>
                    Public
                </h2>
            </Link>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )
}

export default Nav