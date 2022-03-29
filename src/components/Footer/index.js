import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



function Footer() {
    return (
            <div className="footer-div">
                <footer>
                <ul>
                    <a href="www.linkedin.com/in/tanner-b-62b90a222" target="blank">
                    <li>
                        <FaLinkedin />
                    </li>
                    </a>
                    <a href="https://github.com/TannerReed29" target="blank">
                        <li>
                            <FaGithub />
                        </li>
                    </a>
                </ul>
                <div className="container">&copy;2022 by Tanner Brieger</div>
            </footer>
            </div>
    );
};


export default Footer;