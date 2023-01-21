import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <nav className="navbar gradient-border-nav navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"></Link>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link exact activeclassname="menu_active" className="nav-link nav-font active text-capitalize" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link exact activeclassname="menu_active" className="nav-link nav-font active text-capitalize" aria-current="page" to="/team">Teams </Link>
                            </li>
                            <li className="nav-item">
                                <Link exact activeclassname="menu_active" className="nav-link nav-font active text-capitalize" aria-current="page" to="/quiz">Quizzes</Link>
                            </li>
                            <li className="nav-item">
                                <Link exact activeclassname="menu_active" className="nav-link nav-font active text-capitalize" aria-current="page" to="/hackathonIdethon">Hackathon and Ideathon</Link>
                            </li>
                            <li className="nav-item">
                                <Link exact activeclassname="menu_active" className="nav-link nav-font active text-capitalize" aria-current="page" to="/summits">Summit</Link>
                            </li>
                            <li className="nav-item">
                                <Link exact activeclassname="menu_active" className="nav-link nav-font active text-capitalize" aria-current="page" to="/sponsors">Others</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg gradient-border-nav navbar-dark">
                <Link className="navbar-brand" to="/"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active mx-2">
                            <Link className="nav-link text-uppercase" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-uppercase" to="/team">Teams</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-uppercase" to="/quiz">Quizzes</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-uppercase" to="/hackathonIdethon">Hackathon and Ideathon</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-uppercase" to="/summits">Summit</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-uppercase" to="/sponsors">Others</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;