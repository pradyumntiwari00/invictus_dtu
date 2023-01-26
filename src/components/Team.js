import './Team.css'
import React from 'react'
import Footer from './Footer/Footer'
const Team = () => {
    return (
        <>
            <div className='summit'>
                <div className="card"><div className="img"><img className='profile_photo' src="./Summit/logo.png" alt="" /></div><div className="name">Person 1</div><div className="desc">Tech Head</div> </div>
                <div className="card"><div className="img"><img className='profile_photo' src="./Summit/logo.png" alt="" /></div><div className="name">Person 2</div><div className="desc">tech head</div> </div>
                <div className="card"><div className="img"><img className='profile_photo' src="./Summit/logo.png" alt="" /></div><div className="name">Person 3</div><div className="desc">tech head</div> </div>
                <div className="card"><div className="img"><img className='profile_photo' src="./Summit/logo.png" alt="" /></div><div className="name">Person 4</div><div className="desc">tech head</div> </div>
                <Footer/>
            </div>
        </>
    )
}

export default Team