// App.jsx

import React from 'react';
import sampleData from './Data_Pro';

const Test = () => {
  return (
    <div>
      <h1>Sample Data</h1>
      <ul>
        {sampleData.map(person => (
          <li key={person.id}>
            {person.ชื่อ} - {person.age} - {person.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
