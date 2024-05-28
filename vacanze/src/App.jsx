import Title from "./components/Title";
import Holiday from "./components/Holiday";
//Ho utilizzato Cartella Component per dare una chiara locazione ai miei componenti
function App() {
  return (
    <section className="min-h-screen bg-neutral-900 flex flex-col items-center font-sans">
      <Title />
      <article className="text-white flex justify-center">
        <Holiday />
      </article>
    </section>
  );
}

export default App;
