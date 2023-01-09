/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import Accordion_component from "./Accordion_component";

const Accordion = () => {
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
          <Accordion_component
            title="First Accordion"
            content="First Accordion content"
          />
          <Accordion_component
            title="Second Accordion"
            content="Second Accordion content"
          />
          <Accordion_component
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

export default Accordion;
