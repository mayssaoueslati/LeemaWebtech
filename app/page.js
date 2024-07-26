"use client";
import React from 'react';

import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Footer from "./components/Footer"; // Import the Footer component
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 1,
    });
  }, []);

  return (
    <main className="d-flex flex-column min-vh-100 bg-light">
      <NavBar />
      <HomePage />
      <Footer /> {/* Include the Footer component */}
    </main>
  );
}
