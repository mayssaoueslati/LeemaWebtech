"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./internship.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Internship = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    email: "",
    phone: "",
    coverLetter: "",
    internshipType: "Summer",
    cv: null,
  });

  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
      setFileName(files[0].name);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5001/api/internship/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      alert('There was a problem with your submission.');
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="con" data-aos="fade-up">
        <div className="a3" data-aos="zoom-in">
          <h1 className="titre2" data-aos="fade-down">
            Internship Application
          </h1>
          <form onSubmit={handleSubmit} className="form" data-aos="fade-up">
            <div className="form-group" data-aos="fade-left">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="firstName" className="lbl">
                First Name
              </label>
            </div>
            <div className="form-group" data-aos="fade-right">
              <input
                type="text"
                id="familyName"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="familyName" className="lbl">
                Family Name
              </label>
            </div>
            <div className="form-group" data-aos="fade-left">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
              <label htmlFor="email" className="lbl">
                Email
              </label>
            </div>
            <div className="form-group" data-aos="fade-right">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="phone" className="lbl">
                Phone
              </label>
            </div>
            <div className="form-group" data-aos="fade-left">
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="3"
                required
                placeholder=" "
              />
              <label htmlFor="coverLetter" className="lbl">
                Cover Letter
              </label>
            </div>
            <p className="tp" data-aos="fade-right">
              Type of internship :
            </p>
            <label className="form-control" data-aos="fade-left">
              <input
                type="radio"
                name="internshipType"
                value="Summer"
                checked={formData.internshipType === "Summer"}
                onChange={handleChange}
              />
              Summer internship
            </label>

            <label className="form-control" data-aos="fade-right">
              <input
                type="radio"
                name="internshipType"
                value="PFE"
                checked={formData.internshipType === "PFE"}
                onChange={handleChange}
              />
              PFE internship
            </label>
            <div className="form-group" data-aos="fade-left">
              <label htmlFor="cv" className="file-upload-label">
                Upload your CV
              </label>
              <div className="file-upload">
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
                <span className="file-upload-filename">{fileName}</span>
              </div>
            </div>
            <button type="submit" data-aos="fade-up">
              Submit Application
            </button>
          </form>
          <div className="form-footer" data-aos="fade-down">
            <p className="ty">
              Thank you for your interest in joining our team!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Internship;
