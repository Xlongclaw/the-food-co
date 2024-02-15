import React from 'react'

const Logo:React.FC<{white?:boolean}> = (props) => {
  return (
    // Add Image Inspite
    <h1 className={`text-2xl transition-all duration-700 sm:text-2xl md:text-3xl bold-font ${props.white?"text-white":"text-color1"} `}>The Food Co.</h1>
  )
}

export default Logo
