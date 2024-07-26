// HomePage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css";

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    <h3 className='text' data-aos="fade-right" data-aos-duration="1400">
                        Unlock your business potential with our expert web and mobile development, and dynamic digital marketing strategies.
                    </h3>
                    <h2 className='text0' data-aos="fade-right" data-aos-duration="1400">
                        Let's build your digital future together
                    </h2>
                </div>
            </section>
            <div className='container1'>
                <div className='c1'>
                    <img className='icon' src="/experience.png" alt="Experience Icon"></img>
                    <h4 className='text1'>Expérience</h4>
                    <h1 className='numbers'>+3 ans</h1>
                </div>
                <div className='c1'>
                    <img className='icon' src="/projet.png" alt="Project Icon"></img>
                    <h4 className='text1'>Projets</h4>
                    <h1 className='numbers'>+10</h1>
                </div>
                <div className='c1'>
                    <img className='icon' src="/client.png" alt="Client Icon"></img>
                    <h4 className='text1'>Clients</h4>
                    <h1 className='numbers'>+10</h1>
                </div>
            </div>
            <div className='c2' id="services-section">
                <div className='texte2' data-aos="fade-up">
                    <h1>Our services</h1>
                    <p>We are committed to turning your ideas into digital success through our expertise and passion for technology.</p>
                </div>
                <div className='srv2'>
                    <div className='card2' data-aos="fade-up" data-aos-delay="100">
                        <div className='big'>
                            <img src="/web.png" className='icon2' alt="Web Development Icon"></img>
                            <h2 className='cardtitle'>Web development</h2>
                        </div>
                        <p className='cardtext'>We create custom websites that perfectly meet the needs of your business. Our team of web development experts uses the latest technologies to ensure a smooth and engaging user experience.</p>
                    </div>
                    <div className='card2' data-aos="fade-up" data-aos-delay="200">
                        <div className='big'>
                            <img src="/mobile.png" className='icon2' alt="Mobile Development Icon"></img>
                            <h2 className='cardtitle'>Mobile development</h2>
                        </div>
                        <p className='cardtext'>We develop innovative and intuitive apps for iOS and Android. Our apps are designed to provide an exceptional user experience, with a user-friendly interface and advanced features that meet the specific needs of your users.</p>
                    </div>
                    <div className='card2' data-aos="fade-up" data-aos-delay="300">
                        <div className='big'>
                            <img src="/digital.png" className='icon2' alt="Digital Marketing Icon"></img>
                            <h2 className='cardtitle'>Digital marketing</h2>
                        </div>
                        <p className='cardtext'> We analyze your data to optimize each campaign and ensure maximum return on investment. With us, increase your online visibility, attract more qualified visitors, and convert them into loyal customers. </p>
                    </div>
                </div>
            </div>
            <div className='c3'>
                <img src="/photo2.jpg" className='photo2' alt="Values"></img>
                <div className='d3'>
                    <h1 className='titre3'>Our values</h1>
                    <hr></hr>
                    <div className='e3' data-aos="fade-up" data-aos-delay="100">
                        <h4 className='f3'>Integrity</h4>
                        <p>We conduct our business with the highest level of integrity. Transparency, honesty, and ethical practices guide all our interactions.</p>
                    </div>
                    <hr className="solid"></hr>
                    <div className='e3' data-aos="fade-up" data-aos-delay="200">
                        <h4 className='f3'>Teamwork</h4>
                        <p>We foster a supportive and inclusive environment where every team member can contribute their best ideas and efforts. Together, we achieve greater results and create a positive impact for our clients.</p>
                    </div>
                    <hr className="solid"></hr>
                    <div className='e3' data-aos="fade-up" data-aos-delay="300">
                        <h4 className='f3'>Passion</h4>
                        <p>Our passion for technology and innovation drives us to excel in everything we do. We are enthusiastic about solving complex problems and delivering outstanding solutions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
