import backImage from "../assets/image/Contact-hero.png";
import { Button, Footer, Hero, Navbar } from "../components";
import useTitle from "../useTitle";

const ContactScreen = () => {
  useTitle('Contattaci')
  return (
    <>
      <Navbar />
      <Hero img={backImage} disableOverlay>
        <div className="flex h-screen flex-col gap-8 p-8">
          {/* sezione info aggiunta cocktail */}
          <div className="grid gap-4 text-center">
            <h2 className="text-4xl font-bold tracking-wide text-slate-900">
              Vorresti aggiungere un cocktail?
            </h2>
            <h3 className="text-lg leading-6 text-slate-400">
              il nostro team e sempre disponibile per valutare possibili nuove
              ricette ed ad aggiungerle alla nostro database
            </h3>
          </div>
          {/* form per aggiunta cocktail */}
          <div className="w-full rounded bg-white shadow-2xl drop-shadow-2xl">
            <form
              action="https://formspree.io/f/xeojoewq"
              method="POST"
              className="flex flex-col gap-4 p-8 md:px-16"
            >
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
                  required
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
                  placeholder="123 45 67 890"
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
                <Button type="submit" buttonClass=" w-1/2 py-3" aria-label='invia ricetta' role="button">
                  invia ricetta
                </Button>
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
