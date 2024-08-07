import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animationData from "../assets/animation/Animation-cocktail-3.json";
import {
  Button,
  Cocktails,
  ErrorMessage,
  Footer,
  Hero,
  Loading,
  Navbar,
} from "../components";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";

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
        <div className="grid h-screen place-items-center gap-4 p-8 font-Opensans text-white md:grid-cols-2">
          <div className="grid place-items-center gap-8 py-8 text-white">
            <div className="grid gap-4 text-center font-bold uppercase tracking-wider">
              <h2 className="text-4xl text-pink-500">Wiki drink</h2>
              <h3>tutti i cocktail del mondo a portata di click</h3>
            </div>
            <p className="text-center text-sm">
              Wiki Drink e un database internazionale che mette a tua
              disposizione, in maniera{" "}
              <span className="capitalize text-pink-500">gratuita</span>, le
              ricette dei piu importanti e diffusi cocktail al mondo
            </p>

            <Button buttonClass="py-3 px-6" aria-label="Scopri di piu" role="button">
              <Link to="/about" aria-label="Scopri di piu">Scopri di piu</Link>
            </Button>
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

      <section className="mb-8 mt-4">
        {/* section filter e cocktails */}
        <div className="grid w-full place-items-center">
          <div className="flex w-11/12 flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between md:px-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row items-center gap-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <label className="text-xl font-semibold md:font-bold">
                  Cerca il tuo drink
                </label>
                <div className="flex items-center gap-8">
                  <input
                    type="text"
                    id="drink"
                    placeholder={query}
                    className="rounded-full border border-gray-300 p-1 px-4"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" className="text-pink-500" aria-label="Cerca" role="button">
                    <FaSearch />
                  </button>
                </div>
              </div>
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
