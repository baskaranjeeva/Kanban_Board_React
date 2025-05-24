import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ModalContainer from "./components/ModalContainer";
import { StoreContext } from "./context/StoreContext";

function App() {
  const { isModalShow } = useContext(StoreContext);
  return (
    <div>
      <Header />
      <Navbar />
      {isModalShow && <ModalContainer />}
    </div>
  );
}

export default App;
