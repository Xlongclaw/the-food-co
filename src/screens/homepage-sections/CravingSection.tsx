import React from 'react'
import { CravingContainer } from '../../components/craving-elements'
import { cravingData } from '../../constants'

const CravingSection:React.FC = () => {
  return (
    <div className='flex flex-col gap-16'>
      <h3 className="bold-font text-3xl md:text-4xl xl:text-5xl text-center text-color1 ">
        What are you craving for ?
      </h3>
      <div className='flex flex-wrap px-32 gap-16 justify-center'>
        {
            cravingData.map((item)=>{
                return <CravingContainer key={item.name} name={item.name} img={item.img} />
            })
        }
      </div>
    </div>
  )
}

export default CravingSection
