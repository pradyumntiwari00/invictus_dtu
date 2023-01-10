import React from 'react'
import './box.css'

const Box = (props) => {
  return (
    <div className='imgbox' style={props.imgSrc ? {
        backgroundImage : `url(${props.imgSrc})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
        height : '100%',
        width : 'auto',
        maxWidth : '100%',
        ...styles[props.size]
    } : styles[props.size]}>
    </div>
  )
}

const styles = {
    small : {  
        gridRowEnd : 'span 26',
    },
    medium : {
        gridRowEnd : 'span 33',
    },
    large : {
        gridRowEnd : 'span 45',
    }
}
export default Box
