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
      <Hero img={image}>
        <section>
          <div className="mb-4 h-px bg-pink-500" />
          <h3 className="text-center italic text-white">
            <q className="">
              La vita è come un cocktail:
              <br /> ogni sorso è un&apos;avventura da gustare <br /> con
              moderazione e in buona compagnia.
            </q>
          </h3>
          <div className="mt-4 h-px bg-pink-500" />
        </section>
      </Hero>
      <Footer />
    </>
  );
};

export default AboutScreen;
