import React, { useState, useEffect } from 'react';

const TList = ({ data, currentPage, onPageChange }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setShowSkeleton(true);
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, [currentPage, data]);

  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div className='m-2 h-16 text-sm p-3 rounded-xl' style={{ backgroundColor: "#333333", display: 'flex', alignItems: 'center', fontSize: '19px' }}>
        <span className='text-white font-bold' style={{ flex: 1, textAlign: 'center' }}>ลำดับ</span>
        <span className='text-white font-bold' style={{ flex: 2, textAlign: 'center' }}>ชื่อ</span>
        <span className='text-white font-bold' style={{ flex: 2, textAlign: 'center' }}>สกุล</span>
        <span className='text-white font-bold' style={{ flex: 3, textAlign: 'center' }}>สังกัด/ทาง</span>
        <span className='text-white font-bold' style={{ flex: 2, textAlign: 'center' }}>ส่วน</span>
        <span className='text-white font-bold' style={{ flex: 2, textAlign: 'center' }}>แผนก</span>
        <span className='text-white font-bold' style={{ flex: 3, textAlign: 'center' }}>สัญญา</span>
        <span className='text-white font-bold' style={{ flex: 3, textAlign: 'center' }}>Process/Non Process</span>
        <span className='text-white font-bold' style={{ flex: 1.5, textAlign: 'center' }}>Grade</span>
        <span className='text-white font-bold' style={{ flex: 1.5, textAlign: 'center' }}>อายุ (ปี)</span>
        <span className='text-white font-bold' style={{ flex: 1.5, textAlign: 'center' }}>อายุงาน</span>
      </div>

      {showSkeleton ? (
        <>
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className='m-2 p-3 rounded-xl skeleton' style={{ height: '56px' }}></div>
          ))}
        </>
      ) : (
        paginatedData.map((person, index) => (
          <div key={index} className='bg-white m-2 h-14 text-xl p-3 rounded-xl shadow shadow-gray-800' style={{ display: 'flex', alignItems: 'center' }}>
            <span className='text-black font-bold text-base' style={{ flex: 1, textAlign: 'center' }}>{(currentPage - 1) * itemsPerPage + index + 1}</span>
            <span className='text-black font-bold text-base' style={{ flex: 2, textAlign: 'center' }}>{person.ชื่อ}</span>
            <span className='text-black font-bold text-base' style={{ flex: 2, textAlign: 'center' }}>{person.สกุล}</span>
            <span className='text-black font-bold text-base' style={{ flex: 3, textAlign: 'center' }}>{person.สังกัด}</span>
            <span className='text-black font-bold text-base' style={{ flex: 2, textAlign: 'center' }}>{person.ส่วน}</span>
            <span className='text-black font-bold text-base' style={{ flex: 2, textAlign: 'center' }}>{person.แผนก}</span>
            <span className='text-black font-bold text-base' style={{ flex: 3, textAlign: 'center' }}>{person.สัญญา}</span>
            <span className='text-black font-bold text-base' style={{ flex: 3, textAlign: 'center' }}>{person.Process_NonProcess}</span>
            <span className='text-black font-bold text-base' style={{ flex: 1.5, textAlign: 'center' }}>{person.Grade}</span>
            <span className='text-black font-bold text-base' style={{ flex: 1.5, textAlign: 'center' }}>{person.อายุ}</span>
            <span className='text-black font-bold text-base' style={{ flex: 1.5, textAlign: 'center' }}>{person.อายุงาน}</span>
          </div>
        ))
      )}

      <div className='flex justify-end m-2 pt-2'>
        <div className="join">
          {[...Array(totalPages).keys()].map(page => (
            <input
              key={page + 1}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={page + 1}
              checked={currentPage === page + 1}
              onChange={() => onPageChange(page + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TList;
