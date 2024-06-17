import React from 'react'

const T_Out = () => {
    const data = [
        { part: 'ลักสายไฟ', count: 1 },
        { part: 'ลักปูน', count: 5 },
        { part: 'ลาออก', count: 10 },
        { part: 'เสียชีวิต', count: 2 },
        { part: 'อื่นๆ', count: 7 }
      ];
  return (
    <div className="m-4">
      <table className="min-w-full bg-white rounded-b-md shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 pr-9">สาเหตุ</th>
            <th className="py-2 px-4 bg-gray-200 pl-24">จำนวน</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 pl-10">{item.part}</td>
              <td className="py-2 px-4 flex justify-end pr-10">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default T_Out
