/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
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
    { modal &&(
    <div className='model'>
      <div className='overlay'>
        <h5>Question 1</h5>
         Lorem ipsum, dolor sit amet.
      </div>
      <div className='overlay'>
        <h5>Question 2</h5>
         Lorem ipsum, dolor sit amet consectetur .
      </div>
      <div className='overlay'>
        <h5>Question 3</h5>
         Lorem ipsum, dolor sit amet consectetur .
      </div>
    </div>
    )
    }
  </>
  );
};
export default Faq;
