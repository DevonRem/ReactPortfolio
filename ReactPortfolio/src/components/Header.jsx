import { useState } from 'react';
import './Header.css';


function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
    <>
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className={toggleMenu ? "hideLogo" : "navLogo"}>Devon Reminick</a>

                <div className={toggleMenu ? "navMenu showMenu" : "navMenu"}>
                    <ul className="navList">
                        <li className="navItem">
                            <a href="#home" className="navLink activeLink">
                                <i className="uil uil-estate navIcon"></i> Home
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#projects" className="navLink">
                                <i className="uil uil-scenery navIcon"></i> Projects
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#skills" className="navLink">
                                <i className="uil uil-file-alt navIcon"></i> Skills
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#about" className="navLink">
                                <i className="uil uil-user navIcon"></i> About
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times navClose" onClick ={()=> setToggleMenu(!toggleMenu)}></i>
                </div>
                
                <div className={toggleMenu ? "hideToggle" : "navToggle"} onClick ={()=> setToggleMenu(!toggleMenu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </>
    )
}

export default Header