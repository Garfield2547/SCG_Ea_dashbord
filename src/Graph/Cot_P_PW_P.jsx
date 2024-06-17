import React from 'react'

function Cot_P_PW_P() {
  return (
    <>
    <div className='flex bg-gray-300'>
      <div className='w-1/3 m-10 text-2xl text-center font-bold'>
         <div className='text-white bg-black'>
            Process
         </div>
         <div className='border-2 border-black p-8 bg-white text-5xl'>
            31 M
         </div>
      </div>

      <div className='w-1/3 m-10 text-2xl text-center font-bold'>
         <div className='text-white bg-black'>
            Non Process
         </div>
         <div className='border-2 border-black p-8 bg-white text-5xl'>
            130 K
         </div>
      </div>

      <div className='w-1/3 m-10 text-2xl text-center font-bold'>
        <div className='text-white bg-black'>
            Total
        </div>
        <div className='border-2 border-black p-8 bg-white text-5xl'>
            31 M
        </div>
      </div>
    </div>

    </>
  )
}

export default Cot_P_PW_P