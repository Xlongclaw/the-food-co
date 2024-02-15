import React from 'react'

const ContactStrip:React.FC<{compact?:boolean}> = (props) => {
  return (
    <div className={`w-16 sm:w-20 md:w-32 transition-all duration-700 flex flex-col justify-between items-center pb-12 ${props.compact?"pt-12":"pt-32"} text-base md:text-lg font-semibold text-color1`}>
        <h3 className={`${props.compact?"hidden":"block"} -rotate-90`}>xlongclaw@gmail.com</h3>
        <h3 className={`${props.compact?"hidden":"block"} -rotate-90 w-[10rem]`}>+91 8299 196 300</h3>
        <div className="flex flex-col justify-center items-center gap-8 w-16 sm:w-20 md:w-32">
          <img className="w-5 hover:w-10 transition-all duration-200 cursor-pointer sm:w-6 md:w-7" src="images/twitter.png" alt="" />
          <img className="w-5 hover:w-10 transition-all duration-200 cursor-pointer sm:w-6 md:w-7" src="images/facebook.png" alt="" />
          <img className="w-5 hover:w-10 transition-all duration-200 cursor-pointer sm:w-6 md:w-7" src="images/instagram.png" alt="" />
          <img className="w-5 hover:w-10 transition-all duration-200 cursor-pointer sm:w-6 md:w-7" src="images/linkedin.png" alt="" />
        </div>
      </div>
  )
}

export default ContactStrip
