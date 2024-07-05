import Cart from "./components/Cart";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import TotalBox from "./components/TotalBox";
import { useGlobalContext } from "./context/context";

function App() {
  const { cartProducts, isLoading } = useGlobalContext();
  return isLoading ? (
    <div className="App">
      <Navbar />
      <div className="center-item">
        <Loading />
      </div>
    </div>
  ) : (
    <div className="App">
      <Navbar />
      {cartProducts.length > 0 ? (
        <Cart />
      ) : (
        <div className="center-item">
          <h4>Nessun prodotto nel carrello</h4>
        </div>
      )}
      {cartProducts.length > 0 && <TotalBox />}
    </div>
  );
}

export default App;
