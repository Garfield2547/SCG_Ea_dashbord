import React from 'react'
import { Link } from 'react-router-dom';

const Menu_Ham = () => {
  return (
    <div className='pl-6 pt-12 pb-12'>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn drawer-button">
                <div className=''>
                  <img src="/src/img/menu.png" alt="menu icon" style={{ width: '100px', height: 'auto' }} />
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                {/* Sidebar content here */}
                <div className='w-full' style={{ backgroundColor: "#D1D5D8" }}>
                  <img src="/src/img/menu.png" style={{ width: '50px', height: 'auto', backgroundColor: "#D1D5D8" }} />
                </div>
                <div className='pt-5 font-bold text-'>
                  <li>
                    <Link to="/">
                      <img src="/src/img/pie.png" alt="pie" style={{ width: '40px', height: 'auto' }} />
                      กำลังพลคู่ธุรกิจ
                    </Link>
                  </li>
                  <li>
                    <details>
                      <summary className='pl-5'>
                        <img src="/src/img/people_111145.png" alt="pie" className='' style={{ width: '30px', height: 'auto' }} />
                        <span className='pl-1'> รับเข้า-พ้นสภาพ </span>
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-t-none">
                        <li>
                        <Link to="/Input" className='pl-6'>
                            <img src="/src/img/personadd_111023.png" alt="personadd" style={{ width: '30px', height: 'auto' }} />
                            <span className='pl-2'>รับเข้า</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Quit" className='pl-6'>
                            <img src="/src/img/personremove_111165.png" alt="personremove" style={{ width: '30px', height: 'auto' }} />
                            <span className='pl-2'>พ้นสภาพ</span>
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

  )
}

export default Menu_Ham