//customer nav view (same as employeeNav just without the Add New Item link)
import { Link, useNavigate } from 'react-router-dom'

export const CustomerNav = () => {
    const navigate = useNavigate()
    
    return (
    <ul className="navbar">
        <Link className="navbar-item" to="/">
            <img className="logo-img" src="../../images/BisonLogo4.png" alt="Crafty Bison Logo" />
        </Link>
        <li className="navbar-item">
            <Link className="navbar-link" to="/crossStitch">Cross Stitch</Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to="/embroidery">Embroidery</Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to="/miniatures">Miniatures</Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to="/wallHangings">Wall Hangings</Link>
        </li>
        
            {
            localStorage.getItem("bison_user")
                ? <li className="navbar-item">
                    <Link className="navbar-link" to="" onClick={() => {
                        localStorage.removeItem("bison_user")
                        navigate("/", {replace: true})
                    }}>Logout</Link> 
                </li>
                : ""
            }
    </ul>
)
}