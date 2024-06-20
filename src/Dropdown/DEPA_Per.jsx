import React, { useState, useEffect, useRef } from 'react';

const DEPA_Per = ({ selectedDepa, setSelectedDepa }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedDepa(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
          {selectedDepa}
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
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-40 overflow-y-auto"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {['ส่วน A', 'ส่วน B', 'ส่วน C', 'ส่วน D', 'ส่วน E', 'ส่วน F'].map((option) => (
              <a
                key={option}
                href="#"
                className="text-gray-700 block px-4 py-2 text-lg font-bold hover:bg-gray-100 font-mySCG"
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DEPA_Per;
