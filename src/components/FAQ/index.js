/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import Component from "./Component";
import "./index.css";

const index = () => {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {}, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `1500px`);
  }
  return (
    <>
      <div className="accordion__section">
        <div
          className={`accordion ${active ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <p className="accordion__title">FAQ</p>
          <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${height}` }}
          className="accordion__content"
        >
          <Component
            title="First Accordion"
            content="First Accordion content"
          />
          <Component
            title="Second Accordion"
            content="Second Accordion content"
          />
          <Component
            title="Third Accordion"
            content=" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          />
        </div>
      </div>
    </>
  );
};

export default index;
