import React from "react";
import { Link } from "react-router-dom"
import Nav from "../Nav";



function Header() {
    return (
        <header className="flex-row px-1">
            <div className="logo">
                <h1  className="title">
                    <Link to="/">Tanner Brieger</Link>
                </h1>
            </div>
            <Nav></Nav>
        </header>
    );
}


export default Header;