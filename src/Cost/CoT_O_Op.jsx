import React from 'react';
import '../App.css';
import Cot_Ove_Op_M from '../Graph/Cot_Ove_Op_M';
import MU_H_Co from '../Component/Mu_H_Co';
import Im_P from '../ํTable/Im_P';
import { Nb_Co } from '../Component/Nb_Co';
import Cot_Ove_Op_T from '../Graph/Cot_Ove_Op_T';
import T_Ove_Op_U from '../ํTable/T_Ove_Op_U';
import MyDate from '../Component/MyDate';



function CoT_O_Op() {
  return (
    <>
      <Nb_Co />
      {/* กำลังพล */}
      <div className="flex flex-row ">
        <MU_H_Co/>

        <div className='pl-5 pt-7 flex flex-col ml-2 w-full' style={{ width: '1700px' }}>
          <span className='text-4xl font-bold text-black'>ส่วน Operation</span>
          <span className='text-4xl font-bold '> มิถุนายน พ.ศ.2567</span>
        </div>
        <div className='flex flex-row pt-6 w-full'>
          <div className='w-1/4 text-center m-4 w-full '>
            <div className='h-8 text-white font-bold text-2xl ' style={{ backgroundColor: "#333333" }}>ส่วน</div>
            <div className='h-9 bg-slate-300 p-2'></div>
          </div>
          <div className='w-1/4 text-center m-4 w-full '>
            <div className='h-8 text-white font-bold text-2xl ' style={{ backgroundColor: "#333333" }}>เดือน /ปี</div>
            <div className='h-9 bg-slate-300 p-2'> <MyDate/> </div>
          </div>
          
          <div className='w-1/2 text-center text-white font-bold h-16 mt-4 pt-5' style={{ backgroundColor: "#333333" }}>
            Reset
          </div>
        </div>
      </div>

      {/* กราฟต่างๆ */}
      <div className="flex flex-row ">
        <div className="w-1/2 border border-black m-2">
          <Cot_Ove_Op_M/>
        </div>
        <div className="w-1/2 border border-black m-2">
          <Im_P/>
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='w-full border border-black m-2'>
          <Cot_Ove_Op_T/>
        </div>
      </div>
      <div className='m-2'>
      <T_Ove_Op_U/>
      </div>
    </>
  );
}

export default CoT_O_Op;