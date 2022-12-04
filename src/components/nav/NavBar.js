//navbar for employee view

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar_item">
                <Link className="navbar_link" to="/crossStitch">Cross Stitch</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/embroidery">Embroidery</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/miniatures">Miniatures</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/wallHangings">Wall Hangings</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/allItems">All Items</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/addItem">Add New Item</Link>
            </li>
        </ul>
    )
}