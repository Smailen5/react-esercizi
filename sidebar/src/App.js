import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Modal />
      <main className="modal-controller">
        <button className="btn btn-selector">Apri Modal</button>
      </main>
    </div>
  );
}

export default App;
