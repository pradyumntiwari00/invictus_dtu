// import './Navbar.css'
// import React from 'react'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark navbar-head">
//                 <div className="container-fluid">
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link active text-uppercase">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/events" className="nav-link active text-uppercase">EVENTS</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/summits" className="nav-link active text-uppercase">SUMMITS</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/sponsors" className="nav-link active text-uppercase">SPONSORS</Link>
//                             </li>
//                             {/* <li className="nav-item element">
//                                 <Link to="/highlights" className="nav-link active text-uppercase">HIGHLIGHTS</Link>
//                             </li> */}
//                             <li className="nav-item">
//                                 <Link to="/team" className="nav-link active text-uppercase">OUR TEAM</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;
import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  font-family: "Montserrat", sans-serif;
  align-items: center;
  height: 80px;
  justify-content: space-around;
  background-color: #131418;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  z-index: 10;
  position:fixed;
  top:0px;
  width:100%;
`;

const Logo = styled.h1`
  color: #61dafb;
  font-size: 35px;
  letter-spacing: 5px;
`;

const Menu = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  list-style: none;
  cursor: pointer;
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 2px;
  color: #ffffff;
  margin: 0 0.7vw;
  text-transform: uppercase;

  :hover {
    color: #61dafb;
  }
  :before {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background-color: #61dafb;
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
  }

  :hover::before {
    width: 80%;
  }
`;

const Burger = styled.div`
  display: block;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  background-color: #ffffff;
  height: 3px;
  width: 25px;
  margin: 5px;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "45%" : "70%")};
  }

  :nth-child(3) {
    width: ${(props) => (props.open ? "20%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  width: ${(props) => (props.open ? "100%" : 0)};
  background: #131418;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.4s ease-in-out;
  z-index:10;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 65px;
    margin: 20px 0px;
    transition: opacity 0.4s ease-in-out;
  }
`;

function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <Nav>
        <Logo> INVICTUS </Logo>
        <Menu>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/events">Events</Link>
          </Item>
          <Item>
            <Link href="/summits">Summits</Link>
          </Item>
          <Item>
            <Link href="/sponsors">Sponsors</Link>
          </Item>

          <Item>
            <Link href="/team">Our Team</Link>
          </Item>
        </Menu>

        <Burger onClick={() => setActive(!isActive)}>
          <Line open={isActive} />
          <Line open={isActive} />
          <Line open={isActive} />
        </Burger>
      </Nav>

      <Overlay open={isActive}>
        <OverlayMenu open={isActive}>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/events">Events</Link>
          </Item>
          <Item>
            <Link href="/summits">Summits</Link>
          </Item>
          <Item>
            <Link href="/sponsors">Sponsors</Link>
          </Item>
          <Item>
            <Link href="/team">Our Team</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
}

export default Navbar;
