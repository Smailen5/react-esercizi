/* eslint-disable no-unused-vars */
import React from "react";
import { Footer, Hero, Navbar } from "../components";
import backImage from "../assets/image/Contact-hero.png";
const ContactScreen = () => {
  return (
    <>
      <Navbar />
      <Hero img={backImage} disableOverlay>
        <div className="flex h-screen flex-col p-8">
          {/* sezione info aggiunta cocktail */}
          <div className="grid gap-4 text-center">
            <h4 className="text-4xl font-bold tracking-wide text-slate-900">
              Vorresti aggiungere un cocktail?
            </h4>
            <p className="text-lg leading-6 text-slate-400">
              il nostro team e sempre disponibile per valutare possibili nuove
              ricette ed ad aggiungerle alla nostro database
            </p>
          </div>
          {/* form per aggiunta cocktail */}
          <div className="h-96 w-full bg-red-500 "></div>
        </div>
      </Hero>
      <Footer />
    </>
  );
};

export default ContactScreen;
