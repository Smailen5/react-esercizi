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
          <h3 className="text-center text-xl italic text-white">
            <q>
              Il cocktail perfetto è un&apos;armonia di sapori <br /> da gustare
              con piacere e senza fretta.
            </q>
          </h3>
          <div className="mt-4 h-px bg-pink-500" />
        </section>
      </Hero>

      {/* section card info */}
      <section className="flex justify-center bg-gray-100 p-8">
        <div className="container">
          <h3 className="pb-8 text-center text-xl font-semibold uppercase text-violet-700">
            il nostro progetto
          </h3>
          <div className="card-section flex flex-col gap-8">
            {valueCards.map((card) => {
              return (
                <Card key={card.title} {...card} className="value-card" />
              );
            })}
          </div>
        </div>
      </section>

      {/* section team */}
      <div className="flex flex-col items-center">
        <div className="relative block h-[70vh] w-full">
          {/* immagine prima delle card team */}
          <div
            className="absolute inset-0 h-[70vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${teamImg})` }}
          />
          {/* div per overlay immagine, modifica `h-20` per aumentarlo */}
          <div
            className="absolute -bottom-1 h-20 w-full bg-white"
            style={{ clipPath: "polygon(0 80%, 100% 0, 100% 100%, 0% 100%)" }}
          />
        </div>
      </div>


      <div className="flex justify-center p-8">
        <div className="container">
          <h3 className="pb-8 text-center text-xl font-semibold uppercase text-violet-700">
            il nostro team
          </h3>
          <div className="card-section flex flex-col gap-8">
            {/* metti qui le icone del team */}
            {teamCards.map((card) => {
              return (
                <Card key={card.title} {...card} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutScreen;
