// import React, { useEffect, useState } from "react";
// import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
// import { FaSearch } from "react-icons/fa";
// import Lottie from "react-lottie";
// import animationData from "../assets/animation/drink-animation.json";
// import { Link } from "react-router-dom";
import { Button, Footer, Hero, Navbar } from "../components";
// import Navbar from "../components/Navbar";
const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Hero>
        <div className="grid h-screen place-items-center gap-4 p-8 text-white">
          <div className="grid place-items-center gap-8 py-8 text-white">
            <div className="grid gap-4 text-center font-bold uppercase tracking-wider">
              <h2 className="text-5xl text-pink-500">Wiki drink</h2>
              <h4>tutti i cocktail del mondo a portata di click</h4>
            </div>
            <h5 className="text-center text-lg">
              Wiki Drink e un database internazionale che mette a tua
              disposizione, in maniera Gratuita, le ricette dei piu importanti e
              diffusi cocktail al mondo
            </h5>

            <Button buttonClass="py-3 px-6">Scopri di piu</Button>

            {/* immagine animata qui */}
          </div>
          <div className="h-60 w-60 bg-red-500" />
        </div>
      </Hero>
      <Footer />
    </>
  );
};

export default HomeScreen;
