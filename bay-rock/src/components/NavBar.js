import { FaBars, FaTimes} from "react-icons/fa"
import React from "react";

 function NavBar() {
    return(
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Home</a>
                <button>
                    <FaTimes/>
                </button>
            </nav> 
            <button>
                <FaBars/>
            </button>
        </header>
    );
 }

 export default NavBar;