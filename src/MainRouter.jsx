import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Card from "./Pages/Card";
import Home from "./Pages/Home";

export default function MainRouter() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        }
      ></Route>
      <Route
        path="/about"
        element={
          <About
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        }
      ></Route>
      <Route
        path="/card"
        element={
          <Card
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        }
      ></Route>
    </Routes>
  );
}
