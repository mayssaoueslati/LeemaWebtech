"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./job.css"; 

const Job = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    email: "",
    phone: "",
    coverLetter: "",
    position: "Web Development",
    cv: null,
    portfolio: "",
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
      const response = await fetch('http://localhost:5001/api/job/apply', {
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
        <div className="a3">
          <h1 className="titre2">Job Application</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email" className="lbl">
                Email
              </label>
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="coverLetter" className="lbl">
                Cover Letter
              </label>
            </div>
            <div className="form-group tp">
              Position:
              <div className="form-control">
                <input
                  type="radio"
                  id="webDev"
                  name="position"
                  value="Web Development"
                  checked={formData.position === "Web Development"}
                  onChange={handleChange}
                />
                <label htmlFor="webDev">Web Development</label>
              </div>
              <div className="form-control">
                <input
                  type="radio"
                  id="appDev"
                  name="position"
                  value="App Development"
                  checked={formData.position === "App Development"}
                  onChange={handleChange}
                />
                <label htmlFor="appDev">App Development</label>
              </div>
              <div className="form-control">
                <input
                  type="radio"
                  id="digitalMarketing"
                  name="position"
                  value="Digital Marketing"
                  checked={formData.position === "Digital Marketing"}
                  onChange={handleChange}
                />
                <label htmlFor="digitalMarketing">Digital Marketing</label>
              </div>
            </div>
            <div className="form-group file-upload">
              <label htmlFor="cv" className="file-upload-label">
                Upload CV
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleChange}
                required
              />
              <span className="file-upload-filename">{fileName}</span>
            </div>
            <div className="form-group">
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="portfolio" className="lbl">
                Portfolio Link (optional)
              </label>
            </div>
            <button type="submit">Submit Application</button>
          </form>
          <div className="form-footer">
            <p>
              After submitting the form, our team will review your application
              and get back to you soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Job;
