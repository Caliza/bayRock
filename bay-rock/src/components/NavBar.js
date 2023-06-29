import {useRef} from "react"
import { FaBars, FaTimes} from "react-icons/fa"
import React from "react";

 function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classlist.toggle('responsive_nav')
    }
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav> 
            <button className="nav-btn nav-close-btn" onClick={showNavBar}  >
                <FaBars/> 
            </button>
        </header>
    );
 }

 export default NavBar;