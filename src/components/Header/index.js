import React from "react";
import { Link } from "react-router-dom"
import Nav from "../Nav";



function Header() {
    return (
        <header className="flex-row px-1">
            <div className="navbar logo">
                <h1  className="container-fluid title">
                    <Link className="navbar-brand" to="/">TRB</Link>
                </h1>
            </div>
            <Nav></Nav>
        </header>
    );
}


export default Header;