import Title from "./components/Title";
import Holiday from "./components/Holiday";
//Ho utilizzato Cartella Component per dare una chiara locazione ai miei componenti
function App() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-neutral-900 font-sans">
      <Title />
      <article className="flex max-w-3xl justify-center text-white">
        <Holiday />
      </article>
    </section>
  );
}

export default App;
