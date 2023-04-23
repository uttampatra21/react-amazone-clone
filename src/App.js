import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/checkout"
        element={
          <>
            <Header />
            <Checkout />
          </>
        }
      />
      <Route
        path="/Login"
        element={
          <>
            <Login />
          </>
        }
      />
    </Routes>
  );
}

export default App;
