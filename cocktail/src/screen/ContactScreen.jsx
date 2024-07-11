/* eslint-disable no-unused-vars */
import React from "react";
import { Footer, Hero, Navbar, Button } from "../components";
import backImage from "../assets/image/Contact-hero.png";

const ContactScreen = () => {
  return (
    <>
      <Navbar />
      <Hero img={backImage} disableOverlay>
        <div className="flex h-screen flex-col gap-8 p-8">
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
          <div className="w-full rounded bg-white shadow-2xl drop-shadow-2xl">
            <form className="flex flex-col gap-4 p-8">
              <div className="flex flex-col gap-2">
                {/* nome */}
                <label
                  htmlFor="nome"
                  className="text-sm font-semibold uppercase text-violet-800"
                >
                  nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="inserisci il tuo nome"
                />
                <hr />
              </div>
              {/* cognome */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cognome"
                  className="text-sm font-semibold uppercase text-violet-800"
                >
                  cognome
                </label>
                <input
                  id="cognome"
                  name="cognome"
                  type="text"
                  placeholder="inserisci il tuo cognome"
                />
                <hr />
              </div>
              {/* email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold uppercase text-violet-800"
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="cocktail@example.com"
                />
                <hr />
              </div>
              {/* telefono */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="tel"
                  className="text-sm font-semibold uppercase text-violet-800"
                >
                  telefono
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  placeholder="123 45 67 890 "
                />
                <hr />
              </div>
              {/* ricetta */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ricetta"
                  className="text-sm font-semibold uppercase text-violet-800"
                >
                  la tua ricetta
                </label>
                <textarea
                  id="ricetta"
                  name="ricetta"
                  className="rounded-md border border-gray-300 p-2"
                  placeholder="descrivi la tua ricetta"
                />
                <hr />
              </div>
              {/* submit */}
              <div className="mt-4 flex w-full justify-center">
                <Button buttonClass=" w-1/2 py-3">invia ricetta</Button>
              </div>
            </form>
          </div>
        </div>
      </Hero>
      <Footer />
    </>
  );
};

export default ContactScreen;
