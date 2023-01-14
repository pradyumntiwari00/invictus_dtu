/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import Component from "./Component";
import "./index.css";

const index = () => {

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-red-400 mb-4 text-5xl" >FAQ</h1>
      <div className="accordion__section">
        <Component title="First Accordion" content="First Accordion content" />
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
  );
};

export default index;
