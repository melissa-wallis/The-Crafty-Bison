import { Link, useNavigate } from 'react-router-dom'
import BisonLogo2 from '../../assets/BisonLogo2.png'
import './NavBar.css'

export const NavBar = () => {
    const navigate = useNavigate()

    return (
    <ul className="navbar">
        <Link className="logo__link navbar__link" to="/">
        <img className="logo__img" src={BisonLogo2} alt="Crafty Bison Logo" />
        </Link>

        <li className="navbar__item">
        <Link className="navbar__link" to="/crossStitch">Cross Stitch</Link>
        </li>

        <li className="navbar__item">
        <Link className="navbar__link" to="/embroidery">Embroidery</Link>
        </li>

        <li className="navbar__item">
        <Link className="navbar__link" to="/miniatures">Miniatures</Link>
        </li>

        <li className="navbar__item">
        <Link className="navbar__link" to="/wallHangings">Wall Hangings</Link>
        </li>
        
        <li className="navbar__item">
        <Link className="navbar__link" to="/item/create">Add New Item</Link>
        </li>
            {
            localStorage.getItem("bison_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("bison_user")
                        navigate("/", {replace: true})
                    }}>Logout</Link> 
                </li>
                : ""
            }
    </ul>
)
}