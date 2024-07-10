/* eslint-disable no-unused-vars */
import React from "react";
import { Hero, Card, Navbar, Footer } from "../components";
import { valueCards, teamCards } from "../utils/info";
import image from "../assets/image/about-hero.jpg";
import teamImg from "../assets/image/team-img.jpg";

const AboutScreen = () => {
  return (
    <>
      <Navbar />
      <Hero >prova di testo per vedere se la hero rimane sotto</Hero>
      About Screen
      <Footer />
    </>
  );
};

export default AboutScreen;
