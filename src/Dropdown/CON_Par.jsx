import React, { useState, useEffect, useRef } from 'react';

const CON_Par = ({ selectedDepa, selectedSec }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const allOptions = {
    'ส่วน A': {
      'แผนก 1': ['นาย A'],
      'แผนก 5': ['นาย B'],
      
    },
    'ส่วน B': {
      'แผนก 2': ['นาย C'],
      'แผนก 6': ['นาย D'],
    },
    'ส่วน C': {
      'แผนก 3': ['นาย E'],
      'แผนก 7': ['นาย F'],
     
    },
    'ส่วน D': {
      'แผนก 4': ['นาย G'],
      'แผนก 8': ['นาย H'],
     
    }
  };

  let options = [];

  if (selectedSec && selectedSec !== 'ทั้งหมด') {
    options = allOptions[selectedDepa][selectedSec] || [];
  } else if (selectedDepa && selectedDepa !== 'ทั้งหมด') {
    options = Object.values(allOptions[selectedDepa]).flat();
  } else {
    options = Object.values(allOptions).flatMap(section => Object.values(section).flat());
  }

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative inline-block text-left w-full h-full" ref={dropdownRef}>
      <div className="flex justify-center items-center h-full">
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-md shadow-sm px-4 py-2 bg-transparent text-lg font-bold text-gray-700 focus:outline-none h-12 font-mySCG"
          onClick={toggleDropdown}
          style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        >
          {selectedOption || 'ทั้งหมด'}
          <svg
            className="-mr-1 ml-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 max-h-40 overflow-y-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-lg font-bold font-mySCG text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CON_Par;
