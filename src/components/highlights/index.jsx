import React from 'react'
import Box from './box'
import './index.css'


const Highlights = () => {
  return (
    <div className='container'>
        <h2 className='highlight-bg'>Highlights</h2>
        <div className='masonry-container'>
            {/* Add img sources and size accordingly */}
            <Box size = 'small'  imgSrc = './images/invictus.png'/>
            <Box size = 'medium' imgSrc = './images/Lena.png'/>
            <Box size = 'large' imgSrc = '/images/invictus.png'/>
            <Box size = 'medium' />
            <Box size = 'small' />
            <Box size = 'large' />
            <Box size = 'medium' />
            <Box size = 'large' />
            <Box size = 'small' />
        </div>
    </div>
  )
}

export default Highlights
