import React from 'react';
import dtu_logo from "./dtu_logo.png"; 
import invictus_logo from "./invictus_logo.png";
export default function OurSponsers() {
  return (
    <div className="OurSponsers "> 
       <div className="flex">
          <div className='my-9 mx-9'>
            <img className='dtu_logo' src = {dtu_logo} alt="dtu_logo" />
          </div>
          <div  className='sponsor text-black-900 font-medium text-6xl mx-auto mt-14 ' >
            OUR SPONSORS
          </div>
          <div className='my-9 mr-11 '>
            <img className='dtu_logo'  src = {invictus_logo} alt="image5645ee" />
          </div>
        </div>
        <div className='sp my-12 text-black-900  font-medium text-center text-4xl '>
            <div>Title Sponsor</div> 
            <div className='mt-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp my-16 text-black-900 font-medium text-center text-4xl'>
            <div>Associate Title Sponsor</div> 
            <div className="flex justify-center mt-10">
            <div className='mx-16'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-16'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            </div>
        </div>
        <div className='sp my-14 text-black-900 font-medium text-center text-4xl'>
            <div>Powered By</div> 
            <div className="flex justify-center mt-10">
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            </div>
            
        </div>
        <div className='sp my-14 text-black-900 font-medium text-center text-4xl'>
            <div>Digital Partners</div> 
            <div className="flex justify-center mt-10">
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
  
            </div>
        </div>
        <div className='sp my-14 text-black-900 font-medium text-center text-4xl'>
            <div>International Partner</div> 
            <div className='mt-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
        </div>
        <div className='sp mt-14 text-black-900 font-medium text-center text-4xl'>
        <div>Competitions Sponser</div> 
            <div className="flex justify-center mt-10">
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-8'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
  
            </div>
        </div>
        <div className='sp mt-14 text-black-900 font-medium text-center text-4xl'>
            <div>General Sponsors</div> 
            <div className="flex justify-center mt-10">
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            </div>
            <div className="flex justify-center mt-10">
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            <div className='mx-10'><img className='mx-auto' src={invictus_logo} alt="" /> </div>
            </div>
            
        </div>
      </div>
  )
}
