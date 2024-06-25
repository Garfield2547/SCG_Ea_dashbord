import React, { useState, useEffect } from 'react';
import '../App.css';
import In_G from '../Graph/In_G';
import In_T from '../Graph/In_T';
import In_Pro from '../Graph/In_Pro';

import Menu_Ham from '../Component/Menu_Ham';
import { Navbar } from '../Component/Navbar';
import MyDate from '../Component/MyDate';
import Mymonth from '../Component/Mymonth';
import In_Par from '../Graph/In_Par';


function Input_1() {
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 0).toString().padStart(2, '0'); // เดือนต้องเป็นสองหลัก เช่น 01, 02, ...
    setSelectedDate(`${year}-${month}`);
  }, []);

  
  return (
    <>
      <Navbar />
      {/* กำลังพล */}
      <div className="flex flex-row ">
        <Menu_Ham/>

        <div className='pl-5 pt-7 flex flex-col w-1/2 '>
          <span className='text-4xl font-bold text-black'>ข้อมูลรับเข้า</span>
          <Mymonth selectedDate={selectedDate} />
        </div>
        <div className='w-full flex flex-row pt-5 '>
          <div className='w-1/2 text-center mr-4 w-full '>
            <div className='h-8 text-white font-bold  text-2xl' style={{ backgroundColor: "#333333" }}>รับทั้งหมด</div>
            <div className='h-20 font-bold text-5xl pt-4 ' style={{ backgroundColor: "#01B8AA" }}> 0
            </div>
          </div>
          <div className=' text-center m-4 w-full'>
            <div className='h-8 text-white font-bold  text-2xl' style={{ backgroundColor: "#333333" }}>ส่วน</div>
            <div className='h-9 bg-slate-300 '>
              
            </div>
          </div>
          <div className='w-1/2 text-center m-4 w-full'>
            <div className='h-8 text-white font-bold text-2xl' style={{ backgroundColor: "#333333" }}>เดือน /ปี</div>
            <div className='h-9 bg-slate-300 p-2'> <MyDate setSelectedDate={setSelectedDate} /> </div>
          </div>
          
          <div className='w-1/2 text-center text-white font-bold h-16 mt-4 pt-5' style={{ backgroundColor: "#333333" }}>
            Reset
          </div>
        </div>
      </div>

      {/* กราฟต่างๆ */}
      <div className="flex flex-row ">
        <div className="w-full border border-black m-2">
          <In_G />
        </div>
        <div className="w-1/3 border border-black m-2">
          <In_T />
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='w-1/2 border border-black m-2'>
          <In_Pro/>
        </div>
        <div className='w-1/2 border border-black m-2'>
          <In_Par />
        </div>
      </div>
     
    </>
  );
}

export default Input_1;
