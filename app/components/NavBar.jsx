'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'; 
import "./styleNav.css";
import logo from '../assets/logo.png'; 
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavBar = () => {
  const pathName=usePathname()
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (pathName) {
      setActiveLink(pathName);
      console.log(pathName);
    }
  }, [pathName]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light align-items-center border-style-solid" style={{ height: "100px" }}>
      <div className="container">
        <div>
          <Link href="/" passHref legacyBehavior>
            <a
              className={`navbar-brand d-flex align-items-center ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('/')}
            >
              <Image src={logo} alt="Logo" width={50} height={50} />
              <h3 className="mb-0 ml-2 ps-3" style={{ fontFamily: 'serif', color: '#FF5F1F' }}>Leema Webtech</h3>
            </a>
          </Link>
        </div>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex align-items-center m-1">
              <Link href="/" passHref legacyBehavior>
                <a
                  className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('/')}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center m-1">
              <Link href="/Aboutus" passHref legacyBehavior>
                <a
                  className={activeLink === '/Aboutus' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('/Aboutus')}
                >
                  About us
                </a>
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center m-1">
              <Link href="/Portfolio" passHref legacyBehavior>
                <a
                  className={activeLink === '/Portfolio' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('/Portfolio')}
                >
                  References
                </a>
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center m-1">
              <Link href="/#services-section" passHref legacyBehavior>
                <a
                  className={activeLink === '/#services-section' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('/#services-section')}
                >
                  Services
                </a>
              </Link>
            </li>
            <UncontrolledDropdown nav inNavbar className="nav-item d-flex align-items-center m-1 dropdown">
              <DropdownToggle
                nav
                caret
                className={`navbar-link dropdown-toggle ${activeLink === '/Internship' || activeLink === '/Job' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('joinus')}
              >
                Join us
              </DropdownToggle>
              <DropdownMenu className='dp active'>
                <Link href="/Internship" passHref legacyBehavior>
                  <DropdownItem
                    className="dropdown-item"
                    onClick={() => onUpdateActiveLink('/Internship')}
                  >
                    Internship
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href="/Job" passHref legacyBehavior>
                  <DropdownItem
                    className="dropdown-item"
                    onClick={() => onUpdateActiveLink('/Job')}
                  >
                    Job
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <li className='ms-2'>
              <div className="d-flex align-items-center text-decoration-none">
                <Link href="/Project" passHref legacyBehavior>
                  <a>
                    <button
                      className={`boutton1 ${activeLink === '/Project' ? 'active' : ''}`}
                      onClick={() => onUpdateActiveLink('/Project')}
                    >
                      Start a project
                    </button>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
