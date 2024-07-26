"use client";

import React, { useEffect } from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 
import "./aboutus.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavBar />
      <main className="aboutus-container">
        <div className='a1' data-aos="fade-right">
          <div className='a2'>
            <h1 className='titre'>Who we are</h1>
            <p className='txt'>Leema WebTech is a company specializing in the creation of websites and mobile applications. 
              Founded in 2021, we have a wide variety of clients, ranging from small local businesses to large international brands.
            </p>
            <p className='txt'>We offer comprehensive project services, from initial design to launch, including development and hosting. Our team is composed of experienced and passionate professionals who are always looking for new ways to help our clients achieve their goals.</p>
          </div>
          <img className='img' src="/photo3.jpg" alt="Who we are" />
        </div>
        
        <div className='b1' data-aos="fade-left">
          <div className='b2'>
            <h1 className='titre1'>Our Purpose</h1>
            <p className='txt1'>
              At Leema Webtech, our purpose is to harness the power of technology to create impactful and meaningful solutions for businesses around the world. We are driven by a passion to innovate and a commitment to excellence, ensuring that our clients can achieve their goals and make a positive impact in their respective industries.
            </p>
            <p className='txt1'>
              We are dedicated to staying at the forefront of technological advancements, continuously exploring new ways to leverage emerging technologies to benefit our clients. Our purpose is not just about delivering exceptional solutions, but also about making a positive impact on the communities we serve and contributing to the broader tech ecosystem.
            </p>
          </div>
          <img className='img1' src="/photo4.jpg" alt="Our Purpose" />
        </div>
        <section className="values">
          <h2 className="values-title">Our Vision</h2>
          <div className="values-cards">
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <p className="card-text"> Our vision is to revolutionize the digital landscape by providing innovative and efficient software solutions. We strive to empower businesses of all sizes with cutting-edge technology, fostering growth and success in the digital era.</p>
              <p className="card-text"> Our commitment is to deliver exceptional quality and client satisfaction. We aim to build lasting relationships through tailored solutions that meet unique needs, positioning ourselves at the forefront of technological advancements.</p>

            </div>
            
            
          </div>
         
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Aboutus;
