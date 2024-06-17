import React from 'react';
import '../App.css';
import Par_G from '../Graph/Per_G';
import Gar from '../gar';
import Md from '../Graph/md';
import Partner1 from '../Graph/partner1';
import Partner from '../Graph/partner';
import T_List from '../ํTable/T_List';
import { Navbar } from '../Component/Navbar';
import Menu_Ham from '../Component/Menu_Ham';
import MyDate from '../Component/MyDate';

function Per_H() {
  return (
    <>
      <Navbar />
      {/* กำลังพล */}
      <div className="flex flex-row">
        <Menu_Ham/>

        <div className='pl-5 pt-7 flex flex-col w-1/2 '>
          <span className='text-4xl font-bold text-black'style={{ width: "400px" }}>กำลังพลคู่ธุรกิจ</span>
          <span className='text-4xl font-bold'>พฤษภาคม พ.ศ.2567</span>
        </div>
        <div className='w-full flex flex-row pt-5 'style={{ width: "900px" }}>
          <div className='w-1/2 text-center m-4 w-full'>
            <div className='h-8 text-white font-bold  text-2xl' style={{ backgroundColor: "#333333" }}>ส่วน</div>
            <div className='h-9 bg-slate-300 '>
              <select className="select select-ghost w-full max-w-xs">
                <option disabled selected></option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>
          </div>
          <div className='w-1/2 text-center m-4 w-full'>
            <div className='h-8 text-white font-bold  text-2xl' style={{ backgroundColor: "#333333" }}>แผนก</div>
            <div className='h-9 bg-slate-300 p-2'></div>
          </div>
          <div className='w-1/2 text-center m-4 w-full' style={{ width: "1200px" }}>
            <div className='h-8 text-white font-bold text-2xl' style={{ backgroundColor: "#333333" }}>เจ้าของสัญญา</div>
            <div className='h-9 bg-slate-300 p-2'></div>
          </div>
          <div className='w-1/2 text-center m-4 w-full' style={{ width: "1200px" }}>
            <div className='h-8 text-white font-bold text-2xl' style={{ backgroundColor: "#333333" }}>เดือน / ปี</div>
            <div className='h-9 bg-slate-300 p-2' > <MyDate/></div>
          </div>
          <div className='w-1/2 text-center text-white font-bold h-16 mt-4 pt-5' style={{ backgroundColor: "#333333" }}>
            Reset
          </div>
        </div>
      </div>

      {/* กราฟต่างๆ */}
      <div className="flex flex-row ">
        <div className="w-1/2 border border-black m-2">
          <Par_G />
        </div>
        <div className="w-1/2 border border-black m-2">
          <Gar />
        </div>
      </div>
      <div className="border border-black m-2">
        <Md />
      </div>
      <div className='flex flex-row'>
        <div className='w-1/2 border border-black m-2'>
          <Partner1 />
        </div>
        <div className='w-1/2 border border-black m-2'>
          <Partner />
        </div>
      </div>
      <T_List/>
    </>
  );
}

export default Per_H;