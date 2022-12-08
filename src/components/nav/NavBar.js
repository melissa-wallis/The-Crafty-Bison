import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
    <ul className="navbar">
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
        <Link className="navbar__link" to="/viewAll">View All</Link>
        </li>
        
        <li className="navbar__item">
        <Link className="navbar__link" to="/item/create">Add New Item</Link>
        </li>
    </ul>
)
}