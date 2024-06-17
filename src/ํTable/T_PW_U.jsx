import React from 'react';

const tableData = {
  headers: [
    { label: 'หน่วยงาน', rowspan: 2, colspan: 1, className: 'bg-green-600 text-white p-2 border border-black' },
  ],
  subHeaders: [
    { label: 'MO1', className: 'bg-gray-300 p-2 border border-black' },
    { label: 'MO2', className: 'bg-gray-300 p-2 border border-black'  },
    { label: 'MO3', className: 'bg-gray-300 p-2 border border-black' },
    { label: 'MO4', className: 'bg-gray-300 p-2 border border-black' },
    { label: 'MO5', className: 'bg-gray-300 p-2 border border-black' },
    { label: 'Grand Total', className: 'bg-red-500 text-white p-2 border border-black' }
  ],
  rows: [
    { 
      cells: [
        { content: 'BSE', rowspan: 1, className: 'p-2 font-bold border border-black' },
        { content: '521,999', className: 'p-2 border border-black' },
        { content: '123,400', className: 'p-2 border border-black' },
        { content: '123,400', className: 'p-2 border border-black' },
        { content: '123,400', className: 'p-2 border border-black' },
        { content: '123,400', className: 'p-2 border border-black' },
        { content: '123,400', className: 'p-2 border border-black' }
      ]
    },
    {
      cells: [
        { content: 'Purchasing Document', className: 'bg-yellow-400 bg-gray-200 p-2 border border-black text-center font-bold' },
        { content: 'Purchase Order Text', className: 'bg-gray-200 p-2 border border-black text-center font-bold' },
        { content: 'Cost Element', className: 'bg-gray-200 p-2 border border-black text-center font-bold' },
        { content: 'Total quantity', className: 'bg-gray-200 p-2 border border-black text-center font-bold' },
        { content: 'Posted unit of meas', className: 'bg-gray-200 p-2 border border-black text-center font-bold' },
        { content: 'Val. in rep. cur.', className: 'bg-gray-200 p-2 border border-black text-center font-bold' },
        { content: 'Cost Center', className: 'bg-gray-200 p-2 border border-black text-center font-bold' }
      ]
    },
    {
      cells: [
        { content: '8030273910', className: 'p-2 border border-black' },
        { content: 'จ้างบำรุงรักษา PM/ Test Load Crane Winch', className: 'p-2 border border-black' },
        { content: '521,999', className: 'p-2 border border-black' },
        { content: '70', className: 'p-2 border border-black' },
        { content: 'EA', className: 'p-2 border border-black' },
        { content: '6,000', className: 'p-2 border border-black' },
        { content: '0153-70020', className: 'p-2 border border-black' }
      ]
    },
    { cells: Array(7).fill({ content: '123,400', className: 'p-2 border border-black' }), label: 'MRO' },
    { cells: Array(7).fill({ content: '123,400', className: 'p-2 border border-black' }), label: 'Operation' },
    { cells: Array(7).fill({ content: '123,400', className: 'p-2 border border-black' }), label: 'Quarry' },
    { cells: Array(7).fill({ content: '123,400', className: 'p-2 border border-black' }), label: 'VBCC' }
  ]
};

const T_PW_U = () => {
  return (
    <div>
      <div className='text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
        ตารางแสดงหน่วยงาน
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-black shadow-lg">
          <thead>
            <tr>
              {tableData.headers.map((header, index) => (
                <th key={index} rowSpan={header.rowspan} colSpan={header.colspan} className={`${header.className} w-1/8`}>
                  {header.label}
                </th>
              ))}
            </tr>
            <tr>
              {tableData.subHeaders.map((subHeader, index) => (
                <th key={index} className={`${subHeader.className} w-1/8`}>
                  {subHeader.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} rowSpan={cell.rowspan} className={`${cell.className} w-1/8`}>
                    {cell.content}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default T_PW_U;
