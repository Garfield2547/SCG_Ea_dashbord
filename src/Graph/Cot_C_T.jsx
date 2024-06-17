import React from 'react';
import Cot_C_T_B from './Cot_C_T_B';
import Cot_C_T_P from './Cot_C_T_P';
const Cot_C_T = () => {
  return (
    <div className='bg-white h-full'>
      <div className='text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
        แยกตามประเภท
      </div>
      <div className='flex flex-row' style={{ height: '300px' }}>
        <div className='w-1/2'>
          <Cot_C_T_B/>
        </div>
        <div className='w-1/2'>
          <Cot_C_T_P/>
        </div>
      </div>
    </div>
  );
};

export default Cot_C_T;
