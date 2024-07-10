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
          <h3 className="text-center italic text-white text-xl">
            <q>
              Il cocktail perfetto è un&apos;armonia di sapori <br /> da gustare
              con piacere e senza fretta.
            </q>
          </h3>
          <div className="mt-4 h-px bg-pink-500" />
        </section>
      </Hero>

      <section className=" bg-gray-100 p-8 flex justify-center">
        <div className="container">
          <h3 className="pb-8 text-center font-semibold uppercase text-violet-700 text-xl">
            il nostro progetto
          </h3>
          <div className="card-section flex flex-col gap-8">
            {valueCards.map((card) => {
              return (
                <Card key={card.title} {...card} className="value-card">
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutScreen;
