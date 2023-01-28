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
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hackathonIdethon" className="nav-link active">EVENTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/summits" className="nav-link active">SUMMITS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sponsors" className="nav-link active">SPONSORS</Link>
                            </li>
                            {/* <li className="nav-item element">
                                <Link to="/highlights" className="nav-link active text-uppercase">HIGHLIGHTS</Link>
                            </li> */}
                            <li className="nav-item">
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