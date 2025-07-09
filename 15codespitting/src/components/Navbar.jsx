import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul className="flex justify-around flex-row">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/store"}>Store</NavLink>
            </ul>
        </div>
    );
}

export default Navbar;
