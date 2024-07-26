import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const SideBar = () => {
    const  links=[
        {
            label:"Consulting",image:"/consulting.svg",action:"",
        },
        {
            label:"Solutions",image:"/bulb.svg",action:"",
        },
        {
            label:"Environment",image:"/grow.svg",action:"",
        }
    ]
  return (
    <div className="d-flex min-vh-100 w-100 overflow-hidden">
      <aside  id="sidebar" className=" min-vh-100 sidebar bg-light border" style={{ transition: 'all 0.35s ease-in-out', width:"200px"}}>
        <div className="p-3 d-flex flex-column">
          <button id="toggle-btn" type="button" className="ps-0 btn btn-outline-light toggle-btn btn btn-link text-white  " aria-label="Toggle sidebar">
            <img src="/grid-alt.svg" alt="Toggle" width={24} height={24} />
          </button>
        </div>
        <ul className="list-unstyled ps-0 px-20px p-20px ps-3 py-">
            {
                links.map(link=>{
                    return(
                        <>
                        <li className="mb-1">
                          <Link href="#" className=' text-decoration-none'>
                          <div className="d-flex align-items-center">
                              <Image src={link.image} alt="Consulting" width={24} height={24} />
                              <span className="ms-2" style={{
                                      textDecoration: "none",
                                      color: "black",
                                      fontFamily: "ui-monospace",
                                      fontSize: "large",
                                      fontWeight: "bold"}}>{
                                          link.label}</span>
                    </div>
                    </Link>
                </li>
                <li><hr className='nav-divider'></hr></li>
                        
                        </>                    
                    )

                })
            }
          

          <li className="mb-1">
            <Link href="#" className=' text-decoration-none'>
              <div className="d-flex align-items-center text-decoration-none sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#joinus" aria-expanded="false" aria-controls="joinus">
                <Image src="/briefcase-alt.svg" alt="Join us" width={24} height={24} />
                <span className="ms-2" style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "ui-monospace",
                        fontSize: "large",
                        fontWeight: "bold"}}>Join us</span>
              </div>
            </Link>
            <ul id="joinus" className="collapse list-unstyled ps-3">
              <li className="mb-1">
                <Link href="#" className=' text-decoration-none'>
                  <div className="d-flex align-items-center text-decoration-none sidebar-link" className="ms-2" style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "ui-monospace",
                        fontSize: "large",
                        fontWeight: "bold"}}>Job</div>
                </Link>
              </li>
              
              <li className="mb-1">
                <Link href="#" className=' text-decoration-none'>
                  <div className="d-flex align-items-center text-decoration-none sidebar-link" className="ms-2" style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "ui-monospace",
                        fontSize: "large",
                        fontWeight: "bold"}}>Internship</div>
                </Link>
              </li>
            </ul>
          </li>
          <li><hr className='nav-divider'></hr></li>
          <li className="mb-1">
            <Link href="#" className=' text-decoration-none'>
              <div className="d-flex align-items-center text-decoration-none">
                <Image src="/handshake.svg" alt="Start a project" width={24} height={24} />
 
                  <button className="btn-$orange-500 rounded-pill shadow-sm fw-bold " style={{  fontSize: '17px', lineHeight: '24px',marginLeft:'5px' }}>
                  Start a project
                              </button>
              </div>
              



            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;

