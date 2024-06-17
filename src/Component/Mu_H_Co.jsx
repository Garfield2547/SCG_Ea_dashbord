import React from 'react'
import { Link } from 'react-router-dom';

const Menu_Ham = () => {
  return (
    <div className='pl-6 pt-12 pb-12 w-48 ' style={{ width: '220px' }}>
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
                <div className='pt-5 font-bold '>
                  <li>
                    <Link to="/Cot">
                      <img src="/src/img/Contractor.png" alt="pie" style={{ width: '35px', height: 'auto' }} />
                      <span className='pl-1'>Contractor</span>
                      
                    </Link>
                  </li>
                  <li className='pl-1'>
                    <Link to="/Cot_P">
                      
                      <img src="/src/img/P_W.png" alt="pie"  style={{ width: '27px', height: 'auto', }} />
                      <span className='pl-2'> Piece work</span>
                      
                      
                    </Link>
                    
                  </li>
                  <li>
                    <details>
                      <summary  className='pl-6'>
                        <img src="/src/img/Overview.png" alt="pie" className='' style={{ width: '25px', height: 'auto' }} />
                        <span className='pl-1.5'> Overview </span>
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-t-none">
                        <li>
                        <Link to="/CoT_O_Op" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>Opr</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>Qr</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>MRO</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>BSE</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>DDV</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>ID 4.0</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>MD Office</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>IT</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>CAD</span>
                          </Link>
                        </li>
                        <li>
                        <Link to="" className='pl-6'>
                            <img src="/src/img/document_3530.png" alt="personadd" style={{ width: '25px', height: 'auto' }} />
                            <span className='pl-1'>CS</span>
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