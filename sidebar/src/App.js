import Modal from "./Modal";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

function App() {
  const { openModal} = useGlobalContext()
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Modal />
      <main className="modal-controller">
        <button onClick={openModal} className="btn btn-selector">Apri Modal</button>
      </main>
    </div>
  );
}

export default App;
