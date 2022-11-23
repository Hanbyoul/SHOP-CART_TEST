import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Cart from "./page/Cart";
import Products from "./page/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
