/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
// import Lottie from "react-lottie";
// import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import {
  Button,
  Cocktail,
  Cocktails,
  ErrorMessage,
  Footer,
  Hero,
  Loading,
  Navbar,
} from "../components";
import animationData from "../assets/animation/Animation-cocktail-3.json";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";
// import Navbar from "../components/Navbar";

const HomeScreen = () => {
  useTitle("Home");
  const {
    data,
    isLoading,
    isError,
    count,
    query,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
    // console.log('input inviato');
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Hero>
        <div className="grid h-screen place-items-center gap-4 p-8 font-Opensans text-white">
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
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </Hero>

      <section className="mb-8 mt-4">
        {/* section filter e cocktails */}
        <div className="grid w-full place-items-center">
          <div className="flex w-11/12 items-center justify-between gap-8 p-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row items-center gap-8"
            >
              <label className="text-xl font-semibold">
                Cerca il tuo drink
              </label>
              <input
                type="text"
                id="drink"
                placeholder={query}
                className="rounded-full border border-gray-300 p-1 px-4"
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="text-pink-500">
                <FaSearch />
              </button>
            </form>
            <p className="text-gray-400">{count} risultati</p>
          </div>
        </div>
        {/* fine section filter e cocktails */}
        {!isLoading && isError ? (
          <ErrorMessage>Nessun cocktail trovato</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data} />
        ) : (
          <Loading />
        )}
      </section>
      <Footer />
    </>
  );
};

export default HomeScreen;
