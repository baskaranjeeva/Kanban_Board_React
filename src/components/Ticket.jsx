import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import colors from "../styles/colors";
function Ticket({ data }) {
  const { arrTickets, setArrTickets, setTicketDelete, deleteActive } =
    useContext(StoreContext);
  const [isLocked, setIsLocked] = useState(true); // Local state for lock status
  const [taskContent, setTaskContent] = useState(data.ttask); // Editable task content
  const [isEditing, setIsEditing] = useState(false); // Track if task is being edited

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  // Handle changes to the task content
  const handleTaskChange = (event) => {
    setTaskContent(event.target.value);
  };

  // Save the edited task and update global state
  const saveTaskContent = () => {
    const updatedTickets = arrTickets.map((ticket) =>
      ticket.tid === data.tid ? { ...ticket, ttask: taskContent } : ticket
    );
    setArrTickets(updatedTickets);
    setIsEditing(false); // Stop editing
  };

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

  function handleTicketClick() {
    if (deleteActive) {
      setTicketDelete(data.tid);
    }
    // console.log(data.tid);
  }
  // console.log("In Ticket", data);
  return (
    <div>
      <div
        className={`w-[12rem] h-[10rem] border-1 border-gray-400 ml-5 mt-5 text-sm transition-all duration-200 ${
          deleteActive
            ? "cursor-pointer hover:bg-red-100 hover:border-red-400 border-2 border-dashed border-red-300"
            : ""
        }`}
        onClick={handleTicketClick}
      >
        <div
          className="w-full pl-1 cursor-pointer"
          style={{
            backgroundColor: colors[data.tcolor] || "transparent",
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering delete when clicking color
            if (!deleteActive) handleColorClick(); // Only change color if not in delete mode
          }}
        >
          {data.tcolor}
        </div>
        <div className="text-gray-600 pl-1 font-bold border-b-1 border-dashed border-gray-300">
          {data.tid}
        </div>
        <div className="text-gray-600 pl-2 pt-2 h-[60%]">
          {isEditing ? (
            <textarea
              value={taskContent}
              onChange={handleTaskChange}
              onBlur={saveTaskContent} // Save when focus is lost
              className="w-full p-1 border-2 border-gray-300 rounded"
              autoFocus
            />
          ) : (
            <div
              className={`${
                !isLocked && !deleteActive
                  ? "cursor-pointer hover:bg-gray-100"
                  : ""
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering delete when editing
                if (!isLocked && !deleteActive) setIsEditing(true);
              }}
            >
              {taskContent}
            </div>
          )}
        </div>
        <div
          className="flex justify-end cursor-pointer mr-1 "
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering delete when toggling lock
            if (!deleteActive) toggleLock(); // Only allow lock toggle if not in delete mode
          }}
        >
          <FontAwesomeIcon
            icon={isLocked ? faLock : faUnlock}
            size="lg"
            className="text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
