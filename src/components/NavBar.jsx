import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {

    return ( 
        <html className="navBar">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
            </head>
            <header className="navbarbody">
                    <div>                        
                        <div className="titletext">
                            <Link to = "/">
                                <h2 className="ladytext">Lady Meek</h2> 
                                <h2 className="wdtext">Website Development</h2>                        
                            </Link>
                        </div>

                    </div>
                    <div className="navchoices">
                        <ul>
                        <ul>
                            <a href="#about" className = "navtext option">About</a>
                        </ul>        
                        <ul>
                            <a href="#projects" className = "navtext option">Projects</a>
                        </ul>
                        <ul>
                            <a href="#testimonials" className = "navtext option">Testimonials</a>
                        </ul>         
                        <ul>
                            <a href="#contact" className = "navtext option">Contact</a>
                        </ul>
                        </ul>      
                    </div>                    
            </header>
        </html>
     );
}
 
export default NavBar;