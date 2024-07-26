"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Form, Input, Label, Button } from "reactstrap";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: [],
    message: "",
  });

  const [activeIndices, setActiveIndices] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (index, type) => {
    const updatedIndices = activeIndices.includes(index)
      ? activeIndices.filter((i) => i !== index)
      : [...activeIndices, index];

    const updatedProjectTypes = activeIndices.includes(index)
      ? formData.projectType.filter((t) => t !== type)
      : [...formData.projectType, type];

    setActiveIndices(updatedIndices);
    setFormData({ ...formData, projectType: updatedProjectTypes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/project/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
      <main className="project-container">
        <div className="cont">
          <div className="i-part">
            <img className="imgg" src="pp.jpg" alt="Project" />
            <div className="quote">
              Transform your vision into reality with us
            </div>
          </div>
          <div className="inputs">
            <Form onSubmit={handleSubmit} className="form">
              <div className="name1">
                <div className="form-group1">
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                  />
                  <Label htmlFor="firstName" className="lbl1">
                    First Name
                  </Label>
                </div>
                <div className="form-group1">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                  />
                  <Label htmlFor="name" className="lbl1">
                    Name
                  </Label>
                </div>
              </div>

              <div className="form-group1">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <Label htmlFor="email" className="lbl1">
                  Email
                </Label>
              </div>
              <div className="form-group1">
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <Label htmlFor="phone" className="lbl1">
                  Phone
                </Label>
              </div>
              <div className="form-group1">
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <Label htmlFor="company" className="lbl1">
                  Company
                </Label>
              </div>

              <div className="box-container">
                {["Web Development", "App Development", "SEO", "Web Design", "Other"].map((type, index) => (
                  <div
                    key={type}
                    className={`box ${activeIndices.includes(index) ? "active" : ""}`}
                    onClick={() => handleClick(index, type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
              <div className="form-group1">
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  rows="5"
                />
                <Label htmlFor="message" className="lbl1">
                  Message
                </Label>
              </div>
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
