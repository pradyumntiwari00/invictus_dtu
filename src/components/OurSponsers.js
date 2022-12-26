import React from 'react';
import dtu_logo from "./dtu_logo.jpg"; 
import invictus_logo from "./invictus_logo.png";
export default function OurSponsers() {
  return (
    <div className="OurSponsers  bg-black"> 
       <div className="flex">
          <div className='my-9 mx-9'>
            <img className='' src = {dtu_logo} alt="imageee" />
          </div>
          <div  className='sponsor text-white text-6xl mx-auto mt-14 ' >
            OUR SPONSORS
          </div>
          <div className='my-9 mr-11 '>
            <img claasName='' src={invictus_logo} alt="" />
          </div>
        </div>
        <div className='sp my-12 text-white text-center text-xl'>
            <div>PRESENTED BY</div> 
            <div className='mt-4'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp my-12 text-white text-center text-xl'>
            <div>PRESENTED BY</div> 
            <div className='mt-4'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp my-12 text-white text-center text-xl'>
            <div>PRESENTED BY</div> 
            <div className='mt-4'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp my-12 text-white text-center text-xl'>
            <div>PRESENTED BY</div> 
            <div className='mt-4'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp my-12 text-white text-center text-xl'>
            <div>PRESENTED BY</div> 
            <div className='mt-4'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp mt-12 text-white text-center text-xl'>
            <div>PRESENTED BY</div> 
            <div className='mt-4'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
      </div>
  )
}
