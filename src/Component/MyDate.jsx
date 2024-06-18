import React from 'react';

const MyDate = ({ setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  }

  return (
    <input
      className='h-6 pl-6 bg-transparent font-bold text-xl'
      style={{ width: "200px" }}
      type="month"
      onChange={handleChange}
    />
  );
}

export default MyDate;
