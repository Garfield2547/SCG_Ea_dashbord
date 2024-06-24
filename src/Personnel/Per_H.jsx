import React, { useState, useEffect } from 'react';
import '../App.css';
import Per_G from '../Graph/Per_G';
import Md from '../Graph/md';
import Partner1 from '../Graph/partner1';
import Partner from '../Graph/partner';
import T_List from '../ํTable/T_List';
import { Navbar } from '../Component/Navbar';
import Menu_Ham from '../Component/Menu_Ham';
import MyDate from '../Component/MyDate';
import Mymonth from '../Component/Mymonth';
import DEPA_Per from '../Dropdown/DEPA_Per';
import SEC_Per from '../Dropdown/SEC_Per';
import Per_Pro from '../Graph/Per_Pro';
import CON_Par from '../Dropdown/CON_Par';
import Data_Pro from '../Data_People/Data_Pro'; // Import the dataset

function Per_H() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDepa, setSelectedDepa] = useState('ทั้งหมด');
  const [selectedSec, setSelectedSec] = useState('ทั้งหมด');
  const [gradeCounts, setGradeCounts] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0, NO: 0 });
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedBar, setSelectedBar] = useState({ grade: '', department: '' });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 0).toString().padStart(2, '0');
    setSelectedDate(`${year}-${month}`);
  }, []);

  useEffect(() => {
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0, NO: 0 };
    Data_Pro.forEach(person => {
      if (counts[person.Grade] !== undefined) {
        counts[person.Grade]++;
      }
    });
    setGradeCounts(counts);
  }, []);

  const handleReset = () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    setSelectedDate(`${year}-${month}`);
    setSelectedDepa('ทั้งหมด');
    setSelectedSec('ทั้งหมด');
    setSelectedGrade('');
    setSelectedBar({ grade: '', department: '' });
    setCurrentPage(1);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setSelectedBar({ grade: '', department: '' });
    setCurrentPage(1);
  };

  const handleBarClick = ({ grade, department }) => {
    setSelectedBar({ grade, department });
    setSelectedGrade('');
    setCurrentPage(1);
  };

  const filteredData = selectedGrade
    ? Data_Pro.filter(person => person.Grade === selectedGrade)
    : selectedBar.grade
      ? Data_Pro.filter(person => person.Grade === selectedBar.grade && person.แผนก === selectedBar.department)
      : [];

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Menu_Ham />
        <div className='pl-5 pt-7 flex flex-col w-1/2'>
          <span className='text-4xl font-bold text-black' style={{ width: "400px" }}>กำลังพลคู่ธุรกิจ</span>
          <Mymonth selectedDate={selectedDate} />
        </div>
        <div className='w-full flex flex-row pt-5 ' style={{ width: "900px" }}>
          <div className='w-1/2 text-center m-4 w-full'>
            <div className='h-8 text-white font-bold  text-2xl' style={{ backgroundColor: "#333333" }}>ส่วน</div>
            <div className='h-9 bg-slate-300'>
              <DEPA_Per selectedDepa={selectedDepa} setSelectedDepa={setSelectedDepa} />
            </div>
          </div>
          <div className='w-1/2 text-center m-4 w-full'>
            <div className='h-8 text-white font-bold  text-2xl' style={{ backgroundColor: "#333333" }}>แผนก</div>
            <div className='h-9 bg-slate-300'>
              <SEC_Per key={selectedDepa} selectedDepa={selectedDepa} selectedSec={selectedSec} setSelectedSec={setSelectedSec} />
            </div>
          </div>
          <div className='w-1/2 text-center m-4 w-full' style={{ width: "1200px" }}>
            <div className='h-8 text-white font-bold text-2xl' style={{ backgroundColor: "#333333" }}>เจ้าของสัญญา</div>
            <div className='h-9 bg-slate-300 flex items-center justify-center'>
              <CON_Par selectedDepa={selectedDepa} selectedSec={selectedSec} />
            </div>
          </div>
          <div className='w-1/2 text-center m-4 w-full' style={{ width: "1200px" }}>
            <div className='h-8 text-white font-bold text-2xl' style={{ backgroundColor: "#333333" }}>เดือน / ปี</div>
            <div className='h-9 bg-slate-300 p-2'>
              <MyDate setSelectedDate={setSelectedDate} />
            </div>
          </div>
          <button className="btn btn-active btn-neutral pb-1 mt-4 mr-2 ml-2 text-lg" 
          style={{ width: "100px", height: "69px" }} 
          onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="w-1/2 border border-black m-2">
          <Per_G selectedDate={selectedDate} />
        </div>
        <div className="w-1/2 border border-black m-2">
          <Per_Pro selectedDepa={selectedDepa} selectedSec={selectedSec} selectedDate={selectedDate} />
        </div>
      </div>
      <div className="border border-black m-2">
        <Md />
      </div>
      <div className='flex flex-row'>
        <div className='w-1/2 border border-black m-2'>
          <Partner1 onBarClick={handleBarClick} />
        </div>
        <div className='w-1/2 border border-black m-2'>
          <Partner gradeCounts={gradeCounts} onGradeClick={handleGradeClick} />
        </div>
      </div>
      <T_List data={filteredData} currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
}

export default Per_H;
