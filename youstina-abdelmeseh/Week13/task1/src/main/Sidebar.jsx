import React from 'react'
import './Sidebar.css'
import Footer from'../layouts/Footer'

function Sidebar()
{
    return (
        <>
        <div className="row g-0">
            <div className="col-sm-12 col-lg-2 col-md-2">
                <aside className='container sidebar'>
                    <ul className="text-center">
                        <li>
                            <a  href="#">link</a>
                        </li>
                        <li>
                            <a href="#">link</a>
                        </li>
                        <li>
                            <a href="#">link</a>
                        </li>
                    </ul>
                </aside>
            </div>
            <div className="col-sm-12 col-lg-10 col-md-10">
              <Footer/>
            </div>
        </div>
        </>
    )
}

export default Sidebar