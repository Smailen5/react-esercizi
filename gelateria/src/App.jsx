import { Menu } from "./components";

function App() {
  return (
    <div className="font-Montserrat min-h-screen bg-sky-200 py-4 lg:p-8">
    <h1 className=" text-xl font-bold text-left px-4 lg:text-4xl ">Nice Cream</h1>
    <div className=" items-center flex flex-col md:max-w-5xl mx-auto">  
      <Menu />
    </div></div>
  );
}

export default App;
