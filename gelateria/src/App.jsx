import { Menu } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-sky-200 py-4 font-Montserrat lg:p-8">
      <h1 className="px-4 text-left text-xl font-bold lg:text-4xl">
        Nice Cream
      </h1>
      <div className="mx-auto flex flex-col items-center md:max-w-5xl">
        <Menu />
      </div>
    </div>
  );
}

export default App;
