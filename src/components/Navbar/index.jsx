import {
    NavLink
} from "react-router-dom";

import { FaStore, FaShoppingCart} from 'react-icons/fa';

import "./styles.css"

import { Logout } from "../Logout";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">Accessories</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/cart">My Cart</NavLink>
                </li>
                <li>
                    <Logout />
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/new">Add New Accessory</NavLink>
                </li>
            </ul>
        </nav>
    )
}