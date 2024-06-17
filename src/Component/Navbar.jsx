import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-accent-content">
            <div className="flex-none lg:hidden">
              
            </div> 
            <div className="flex-1 flex px-1 mx-2">
              <img src="/src/img/Scg logo.png" className='h-9'/>
            </div>
            <div className="flex-none hidden lg:flex items-center">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><Link to="/Cot_O" className="font-bold text-lg text-white"> COST</Link></li>
                <li><Link to="/" className="font-bold text-lg text-red-600">MANPOWER REPORTING</Link></li>
              </ul>
              <div className="avatar">
                <div className="w-10 rounded-full mr-4">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='h-10' />
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          
        </div> 
      </div>
      
  )
}

