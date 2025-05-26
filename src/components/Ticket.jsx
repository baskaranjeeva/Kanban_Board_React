import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import colors from "../styles/colors";
function Ticket({ data }) {
  const { arrTickets, setArrTickets } = useContext(StoreContext);

  // Function to handle cycling colors
  const handleColorClick = () => {
    const colorKeys = Object.keys(colors);
    const currentIndex = colorKeys.indexOf(data.tcolor);
    const nextIndex = (currentIndex + 1) % colorKeys.length;
    const newColor = colorKeys[nextIndex];

    // Update ticket's color in the main array
    const updatedTickets = arrTickets.map((ticket) =>
      ticket.tid === data.tid ? { ...ticket, tcolor: newColor } : ticket
    );
    setArrTickets(updatedTickets);
  };
  console.log("In Ticket", data);
  return (
    <div>
      <div className="w-[12rem] h-[10rem] border-1 border-gray-400 ml-5 mt-5 text-sm">
        <div
          className="w-full pl-1 cursor-pointer"
          style={{
            backgroundColor: colors[data.tcolor] || "transparent",
          }}
          onClick={handleColorClick} // Attach click handler here
        >
          {data.tcolor}
        </div>
        <div className="text-gray-600 pl-1 font-bold border-b-1 border-gray-300">
          {data.tid}
        </div>
        <div className="text-gray-600 pl-2 pt-2">{data.ttask}</div>
      </div>
    </div>
  );
}

export default Ticket;
