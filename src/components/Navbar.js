import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import Connect from './home/Connect';



const Navbar = () => {

    let navLink = [
        { title: "Home", to: "/" },
        { title: "Place to stay", to: "/place-to-stay" },
        { title: "NFTs", to: "/nfts" },
        { title: "Community", to: "/community" },
    ];

    return (
        <header className='homenav '>
            <nav className="navbar shadow-none navbar-expand-lg fixed-to light-bg " id="navbar">
                <div className="container">
                    <Link to="/" className="nav-logo">
                        <img src={logo} alt="Logo" width="100%" className='' />
                    </Link>
                    <a
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon toggler">
                            <i className="bi bi-list h3 pry-text " />
                        </span>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center align-items-center">
                            {navLink.map(({ title, to }, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <NavLink ClassName="" to={`${to}`}>
                                            {title}
                                        </NavLink>
                                    </li>
                                );
                            })}

                        </ul>
                        <ul className="navbar-nav ">
                            <li className="btn-contact text-center">
                                <Connect>
                                    <button className="btn pry light-text m-2 br-sm shadow-none">
                                        Connect wallet
                                    </button>
                                </Connect>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;