import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return (
        <section className=" home my-5">
            <div className="title">
                <h2>Hello, I'm Tanner</h2>
                <p>Welcome to my Portfolio</p>
                <Link to="project">
                    <button>View my Projects</button>
                </Link>
            </div>
        </section>
    );
}


export default Home;