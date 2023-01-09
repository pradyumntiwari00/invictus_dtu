import React, { useState } from 'react'
import './highlights.css'

const Highlights = () => {
    const ImgData = {
        img1: '/images/a.png',
        img2: '/images/b.png',
        img3: '/images/c.png',
        img4: '/images/d.png',
    }

    const [currImg, setCurrImg] = useState(1)

    return (

        <div className='container'>

            <span className='title'>Highlights</span>

            <div className='img-container'
                style={
                    {
                        backgroundImage : `url(${ImgData[`img${currImg}`]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '100%',
                        width: '100%',
                        borderRadius: '10px',
                        transition: 'all 0.5s ease-in-out',
                    }
                }
            >
                <div className='img-btns'>
                    <button className='btn' onClick={() => setCurrImg(curr => 
                        curr === 1 ? Object.keys(ImgData).length : curr - 1
                        )}>
                            <img src='/images/left.svg' alt='left-arrow' className='btn-svg' />
                            
                        </button>
                    <button className='btn' onClick={() => setCurrImg(curr =>
                        curr === Object.keys(ImgData).length ? 1 : curr + 1
                        )}>
                            <img src='/images/right.svg' alt='right-arrow' className='btn-svg' />
                        </button>
                    {console.log(currImg)}
                    {console.log(Object.keys(ImgData).length)}
                </div>
            </div>
        </div>
    )
}

export default Highlights