import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./styles-new.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Section} from "./components/Section";
// import "./styles.css";

export const LandingPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p16mb8j', 'template_tzuea01', form.current, 'jEIRxeQ7zUBtuZhJb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="landing-page">
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
};