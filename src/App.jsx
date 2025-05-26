import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ModalContainer from "./components/ModalContainer";
import { StoreContext } from "./context/StoreContext";
import Ticket from "./components/Ticket";

function App() {
  const { isModalShow, arrTickets } = useContext(StoreContext);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex justify-evenly flex-wrap">
        {arrTickets.map((item, index) => {
          return <Ticket key={index} data={item} />;
        })}
        {isModalShow && <ModalContainer />}
      </div>
    </div>
  );
}

export default App;
