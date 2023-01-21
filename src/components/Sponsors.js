import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Home.css";
import "./Sponsors.css";

const Home = () => {
  const sponsors = [
    "../images/logo.png",
    "../images/logo.png",
    "../images/logo.png",
    "../images/logo.png",
    "../images/logo.png",
    "../images/logo.png",
  ];
  return (
    <>
      <div className="sponsor">
        <h1 className="sponsor-title">OUR SPONSORS</h1>
        <div className="main">
          <Container style={{ width: "100%", margin: 0, maxWidth: "100vw" }}>
            <Row justify="center">
              {sponsors.map((sponsor) => (
                <Col
                  lg={3}
                  md={4}
                  xs={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="sponsor-col">
                    <img
                      src={require("../images/logo.png")}
                      style={{
                        width: "100%",
                        objectFit: "contain",
                      }}
                      className="logo"
                      alt=""
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
