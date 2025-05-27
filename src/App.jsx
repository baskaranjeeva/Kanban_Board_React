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
  const { isModalShow, arrTickets, filterColor } = useContext(StoreContext);
  // Filter tickets based on selected color
  const filteredTickets =
    filterColor === "all"
      ? arrTickets
      : arrTickets.filter((ticket) => ticket.tcolor === filterColor);
  return (
    <div>
      <Header />
      <Navbar />
      {/* <div className="flex justify-evenly flex-wrap">
        {arrTickets.map((item, index) => {
          return <Ticket key={index} data={item} />;
        })}
        {isModalShow && <ModalContainer />}
      </div> */}
      {/* Optional: Show filter status */}
      <div className="text-center py-2 bg-gray-100">
        <span className="text-sm text-gray-600">
          {filterColor === "all"
            ? `Showing all tickets (${arrTickets.length} total)`
            : `Showing ${filterColor} tickets (${filteredTickets.length} of ${arrTickets.length})`}
        </span>
      </div>

      <div className="flex justify-evenly flex-wrap">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((item, index) => {
            return <Ticket key={item.tid} data={item} />; // Using tid as key is better than index
          })
        ) : (
          <div className="w-full text-center py-8 text-gray-500">
            {filterColor === "all"
              ? "No tickets available. Click the + button to add some!"
              : `No ${filterColor} tickets found. Try a different filter or add new tickets.`}
          </div>
        )}
        {isModalShow && <ModalContainer />}
      </div>
    </div>
  );
}

export default App;
