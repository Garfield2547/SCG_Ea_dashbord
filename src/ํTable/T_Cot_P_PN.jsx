import React from 'react';

const data = {
  nonProcess: {
    name: 'Non Process',
    jan: 130211.38,
    grandTotal: 130211.38,
    details: [
      { name: 'PM', jan: 16485.00, grandTotal: 16485.00 },
      { name: 'ขนถ่ายฝุ่น', jan: '-', grandTotal: '-' },
      { name: 'งานป.', jan: 2500.00, grandTotal: 2500.00 },
      { name: 'งานซ่อมแซมและบำรุงรักษา', jan: 97306.38, grandTotal: 97306.38 },
      { name: 'งานทาสี', jan: 5000.00, grandTotal: 5000.00 },
      { name: 'งานทำความสะอาด', jan: 11520.00, grandTotal: 11520.00 },
    ],
  },
  process: {
    name: 'Process',
    jan: 31346692.09,
    grandTotal: 31346692.09,
    details: [
      { name: 'ค่าขนส่ง + ค่าเครื่องจักร', jan: 4913134.67, grandTotal: 4913134.67 },
      { name: 'งานขน Biomass', jan: 906442.20, grandTotal: 906442.20 },
      { name: 'งานวัสดุก้น', jan: 3604101.76, grandTotal: 3604101.76 },
      { name: 'ประเภทงานอื่นๆ', jan: 26433557.42, grandTotal: 26433557.42, subDetails: [
        { name: 'PM', jan: 10925430.69, grandTotal: 10925430.69 },
        { name: 'ขนถ่ายฝุ่น', jan: 44800.00, grandTotal: 44800.00 },
        { name: 'งานป.', jan: 386168.57, grandTotal: 386168.57 },
        { name: 'งานซ่อมแซมและบำรุงรักษา', jan: 4911103.09, grandTotal: 4911103.09 },
        { name: 'งานทำความสะอาด', jan: 87111.94, grandTotal: 87111.94 },
      ]},
    ],
  },
};

const T_Cot_P_PN = () => {
  return (
    <div className="p-1">
      <table className="w-full border-collapse border border-gray-800 text-xs">
        <thead>
          <tr>
            <th className="border border-gray-800 px-1 py-1 font-bold text-xs bg-gray-300">Name</th>
            <th className="border border-gray-800 px-1 py-1 font-bold text-xs bg-gray-300">Jan</th>
            <th className="border border-gray-800 px-1 py-1 font-bold text-xs bg-gray-300">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Non Process Section */}
          <tr>
            <td className="border border-gray-800 px-1 py-1 font-bold text-xs bg-yellow-300" colSpan={3}>{data.nonProcess.name}</td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-1 py-1">{data.nonProcess.jan.toLocaleString()}</td>
            <td className="border border-gray-800 px-1 py-1">{data.nonProcess.jan.toLocaleString()}</td>
          </tr>
          {data.nonProcess.details.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-800 px-1 py-1 pl-4">{item.name}</td>
              <td className="border border-gray-800 px-1 py-1">{item.jan}</td>
              <td className="border border-gray-800 px-1 py-1">{item.grandTotal}</td>
            </tr>
          ))}

          {/* Process Section */}
          <tr>
            <td className="border border-gray-800 px-1 py-1 font-bold text-xs bg-yellow-300" colSpan={3}>{data.process.name}</td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-1 py-1">{data.process.jan.toLocaleString()}</td>
            <td className="border border-gray-800 px-1 py-1">{data.process.jan.toLocaleString()}</td>
          </tr>
          {data.process.details.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="border border-gray-800 px-1 py-1 pl-4">{item.name}</td>
                <td className="border border-gray-800 px-1 py-1">{item.jan}</td>
                <td className="border border-gray-800 px-1 py-1">{item.grandTotal}</td>
              </tr>
              {item.subDetails && item.subDetails.map((subItem, subIndex) => (
                <tr key={subIndex}>
                  <td className="border border-gray-800 px-1 py-1 pl-8">{subItem.name}</td>
                  <td className="border border-gray-800 px-1 py-1">{subItem.jan}</td>
                  <td className="border border-gray-800 px-1 py-1">{subItem.grandTotal}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default T_Cot_P_PN;