import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return ( 
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="navBar">
                    <ul className="titletext">
                        <h2>Lady Meek</h2>
                        <h1>Website Development</h1>
                    </ul>
                </div>
                <hr className="navbarline"/>
            </body>
        </html>
     );
}
 
export default NavBar;