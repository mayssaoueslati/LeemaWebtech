import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-address">
          <h4 className='address'>5100 Av. du 2 Mars 1934, Mahdia 5100</h4>
          <h4 className='phone'>Phone: +216 25 440 028</h4>
          <h4 className='email'>Email: contact@leemawebtech.com</h4>
        </div>
        <div className='socials'>
          <a href="https://www.linkedin.com/company/leema-webtech" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className='social-icon' />
          </a>
          <a href="https://www.instagram.com/leemawebtech" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className='social-icon' />
          </a>
          <a href="https://www.facebook.com/leemawebtech" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" className='social-icon' />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Leema WebTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
