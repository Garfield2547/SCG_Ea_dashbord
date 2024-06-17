import React from 'react';

const TList = () => {
  return (
    <>
      <div className='m-2 h-11 text-sm p-3 rounded-xl' style={{ backgroundColor: "#333333" }}>
        <span className='text-white font-bold'>ลำดับ</span>
        <span className='text-white font-bold px-12'>ชื่อ</span>
        <span className='text-white font-bold px-12'>สกุล</span>
        <span className='text-white font-bold px-12'>สังกัด/ทาง</span>
        <span className='text-white font-bold px-16'>ส่วน</span>
        <span className='text-white font-bold px-12'>สัญญา</span>
        <span className='text-white font-bold px-12'>Process/Non Process</span>
        <span className='text-white font-bold px-10'>job title</span>
        <span className='text-white font-bold px-5'>Grade</span>
        <span className='text-white font-bold px-5'>อายุ (ปี)</span>
        <span className='text-white font-bold px-5'>อายุงาน</span>
      </div>

      <div className='bg-white m-2 h-14 text-xl p-3 rounded-xl shadow shadow-gray-800'>
        <div className='text-sm pt-2'>
          <span className='text-black font-bold px-2'>1</span>
          <span className='text-black font-bold px-10'>พีระพงศ์</span>
          <span className='text-black font-bold px-8'>เกิดรอด</span>
          <span className='text-black font-bold px-12'>หจก.นครแอร์</span>
          <span className='text-black font-bold'>Mining and Circularity</span>
          <span className='text-black font-bold px-4'>Ts_QR_26_2566</span>
          <span className='text-black font-bold pl-20'>Non Process</span>
          <span className='text-black font-bold pl-24'>เตรียม Biomass</span>
          <span className='text-black font-bold px-14'>B</span>
          <span className='text-black font-bold px-3'>25</span>
          <span className='text-black font-bold pl-16'>5</span>
        </div>
      </div>

      <div className='bg-white m-2 h-14 text-xl p-3 rounded-xl shadow shadow-gray-800'>
        <div className='text-sm pt-2'>
          <span className='text-black font-bold px-2'>2</span>
          <span className='text-black font-bold px-10'>พีระพงศ์</span>
          <span className='text-black font-bold px-8'>เกิดรอด</span>
          <span className='text-black font-bold px-12'>หจก.นครแอร์</span>
          <span className='text-black font-bold'>Mining and Circularity</span>
          <span className='text-black font-bold px-4'>Ts_QR_26_2566</span>
          <span className='text-black font-bold pl-20'>Non Process</span>
          <span className='text-black font-bold pl-24'>เตรียม Biomass</span>
          <span className='text-black font-bold px-14'>B</span>
          <span className='text-black font-bold px-3'>25</span>
          <span className='text-black font-bold pl-16'>5</span>
        </div>
      </div>
      
      <div className='flex justify-end m-2 pt-2'>
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
      </div>
    </>
  );
};

export default TList;
