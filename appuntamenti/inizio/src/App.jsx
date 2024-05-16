import List from "./components/List";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-blue-200 m-6">
        <h2 className="font-bold capitalize text-4xl">Prossimi incontri</h2>
        <List />
      </div>
    </>
  );
}

export default App;
