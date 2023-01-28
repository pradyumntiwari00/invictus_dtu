import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-head">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item element">
                                <Link to="/" className="nav-link active text-uppercase">Home</Link>
                            </li>
                            <li className="nav-item element">
                                <Link to="/hackathonIdethon" className="nav-link active text-uppercase">EVENTS</Link>
                            </li>
                            <li className="nav-item element">
                                <Link to="/summits" className="nav-link active text-uppercase">SUMMITS</Link>
                            </li>
                            <li className="nav-item element">
                                <Link to="/sponsors" className="nav-link active text-uppercase">SPONSORS</Link>
                            </li>
                            {/* <li className="nav-item element">
                                <Link to="/highlights" className="nav-link active text-uppercase">HIGHLIGHTS</Link>
                            </li> */}
                            <li className="nav-item element">
                                <Link to="/team" className="nav-link active text-uppercase">OUR TEAM</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

 export default Navbar;
// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom'
// import "./Navbar.css";

// function Navbar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle("responsive_nav");
// 	};

// 	return (
// 		<header>
// 			<nav ref={navRef}>
//                <a href="/summits">Home</a>
//               <Link to="/">Home</Link>
//               <Link to="/hackathonIdethon" className="">EVENTS</Link>
//               <Link to="/summits" className="">SUMMITS</Link>
//               <Link to="/sponsors" className="">SPONSORS</Link>
//               <Link to="/team" className="">OUR TEAM</Link>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button className="nav-btn" onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

// export default Navbar;