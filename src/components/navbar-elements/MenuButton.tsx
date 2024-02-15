import React from 'react'
import MenuIcon from './MenuIcon'

const MenuButton:React.FC = () => {
  return (
    <div className='bg-color1 transition-all duration-700 w-16 sm:w-20 md:w-32 h-full overflow-hidden flex justify-center items-center'>
      <MenuIcon/>
    </div>
  )
}

export default MenuButton
