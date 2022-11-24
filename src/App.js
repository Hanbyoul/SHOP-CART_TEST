import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Cart from "./page/Cart";
import Products from "./page/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progress + 10);
    console.log("1");
    setProgress(progress + 20);
    console.log("2");
    setProgress(100);
    console.log("3");

    const timer = setTimeout(() => {
      navigate("/products");
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
