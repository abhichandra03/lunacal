import React, { useState } from 'react'

const LeftPanel = () => {
  const [count, setCount] = useState(0);
  const handleDec =() => {
    setCount(count-1)
  }
  const handleInc =() => {
    setCount(count+1)
    setCount(count+1)
  }
  return (


    <div className='w-full h-[100px] lg:w-1/2 flex justify-center lg:items-start items-center lg:h-[720px] max-w-[720px] mr-0 lg:mr-8 mb-8 lg:mb-0'>
        <div className='w-full h-full max-h-[690px] bg-[#616161D1] border-[#96BEE7] border-[1px] rounded-lg'>
            
        </div>
    </div>
  )
}

export default LeftPanel