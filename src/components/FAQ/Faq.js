/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import "./faq.css";
const Faq = () => {
  const [modal,setmodal]=useState(false);
  const toggleModal=()=>{
    setmodal(!modal);
    console.log(modal);
  }
  return (
    <>
    <div className='faq'>
      <button onClick={toggleModal} className='btn' type="button">
         F <br />
         A <br />
         Q <br />
         S <br />
         </button>
    </div>
    <div className="modal">
      <div className="overlay">
        <h3>Question 1</h3>
      Lorem ipsum, dolor sit amet.
      </div>
      <div className="overlay">
        <h3>Question 2</h3>
      Lorem ipsum, dolor sit amet consectetur .
      </div>
      <div className="overlay">
        <h3>Question 3</h3>
      Lorem ipsum, dolor sit amet consectetur .
      </div>
    </div>
    {/* {modal&& (
    
    )} */}
  </>
  );
};
export default Faq;
