import React, { useState, useEffect } from 'react';
import '../App.css';
import Cot_C_M from '../Graph/Cot_C_M';
import Cot_C_U from '../Graph/Cot_C_U';
import Cou_C_T from '../Graph/Cot_C_T';
import MU_H_Co from '../Component/Mu_H_Co';
import { Nb_Co } from '../Component/Nb_Co';
import MyDate from '../Component/MyDate';
import Mymonth from '../Component/Mymonth';


function CoT_C() {
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 0).toString().padStart(2, '0'); // เดือนต้องเป็นสองหลัก เช่น 01, 02, ...
    setSelectedDate(`${year}-${month}`);
  }, []);

  
  return (
    <>
      <Nb_Co />
      {/* กำลังพล */}
      <div className="flex flex-row ">
        <MU_H_Co/>

        <div className='pl-5 pt-7 flex flex-col w-full ml-2 ' style={{ width: '1700px' }} >
          <span className='text-4xl font-bold text-black'>Contractor Cost</span>
          <span className='text-4xl font-bold flex flex-row'>ค่าใช้จ่ายงานจ้างเหมา &nbsp;<Mymonth selectedDate={selectedDate} /></span>
        </div>
        <div className='w-full flex flex-row pt-5 '>
          <div className='w-1/4 text-center m-4 w-full ml-64'>
            <div className='h-8 text-white font-bold text-2xl ' style={{ backgroundColor: "#333333" }}>เดือน /ปี</div>
            <div className='h-9 bg-slate-300 p-2'> <MyDate setSelectedDate={setSelectedDate} /> </div>
          </div>

          <div className='w-1/2 text-center text-white font-bold h-16 mt-4 pt-5' style={{ backgroundColor: "#333333" }}>
            Reset
          </div>
        </div>
      </div>

      {/* กราฟต่างๆ */}
      <div className="flex flex-row ">
        <div className="w-1/2 border border-black m-2">
          <Cot_C_M/>
        </div>
        <div className="w-1/2 border border-black m-2">
          <Cot_C_U />
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='w-full border border-black m-2'>
          <Cou_C_T/>
        </div>
        
      </div>
    </>
  );
}

export default CoT_C;
