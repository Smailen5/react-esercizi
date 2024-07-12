// import React, { useEffect, useState } from "react";
// import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
// import { FaSearch } from "react-icons/fa";
// import Lottie from "react-lottie";
// import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { Button, Footer, Hero, Navbar } from "../components";
import animationData from "../assets/animation/Animation-cocktail-3.json";
import Lottie from "react-lottie";
// import Navbar from "../components/Navbar";
const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Hero>
        <div className="font-Opensans grid h-screen place-items-center gap-4 p-8 text-white">
          <div className="grid place-items-center gap-8 py-8 text-white">
            <div className="grid gap-4 text-center font-bold uppercase tracking-wider">
              <h2 className="text-4xl text-pink-500">Wiki drink</h2>
              <h4>tutti i cocktail del mondo a portata di click</h4>
            </div>
            <h5 className="text-center text-sm">
              Wiki Drink e un database internazionale che mette a tua
              disposizione, in maniera{" "}
              <span className="capitalize text-pink-500">gratuita</span>, le
              ricette dei piu importanti e diffusi cocktail al mondo
            </h5>

            <Button buttonClass="py-3 px-6">
              <Link to="/about">Scopri di piu</Link>
            </Button>

            {/* immagine animata qui */}
          </div>
          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
        </div>
      </Hero>
      <Footer />
    </>
  );
};

export default HomeScreen;
