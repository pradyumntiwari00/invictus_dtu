import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
    <>
        <div className="navbar">
                <div className="element"><Link to="/">HOME</Link></div>
                <div className="element"><Link to="/hackathonIdethon">EVENTS</Link></div>
                <div className="element"><Link to="/summits">SUMMITS</Link></div>
                <div className="element"><Link to="/sponsors">SPONSORS</Link></div>
                <div className="element"><Link to="/team">OUR TEAM</Link></div>
        </div>
            {/*<nav className="navbar navbar-expand-lg gradient-border-nav navbar-dark">
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
    </nav>*/}
        </>
    )
}

export default Navbar;