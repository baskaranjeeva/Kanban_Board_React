import React, { useContext, useEffect, useState } from "react";
import colors from "../styles/colors";
import { StoreContext } from "../context/StoreContext";
import Ticket from "./Ticket";
import ShortUniqueId from "short-unique-id";

function ModalContainer() {
  const uid = new ShortUniqueId();
  let txt;

  const {
    setModalShow,
    arrTickets,
    setArrTickets,
    activeButton,
    setActiveButton,
  } = useContext(StoreContext);

  const handleTaskChange = (event) => {
    txt = event.target.value;
    // setTaskData(txt);
    // console.log(task);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      txt = event.target.value;
      let uniqu_id = uid.randomUUID ? uid.randomUUID() : uid(); // For compatibility with different versions
      // setTaskData(txt);
      let ticketObj = { tid: uniqu_id, tcolor: activeButton, ttask: txt };
      // arrTickets.push(ticketObj);
      setArrTickets((prevTickets) => [...prevTickets, ticketObj]);
      event.target.value = "";
      console.log(activeButton);
      console.log(ticketObj);
      setModalShow(false);
    }
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set active button based on clicked button
  };

  return (
    <div>
      <div className="w-[30vw] h-[35vh] fixed top-[58%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] border-1 ml-5 mt-5  border-gray-400 bg-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="ml-2 text-md font-bold">New Task</h2>
          <p
            className="text-md font-bold mr-3 cursor-pointer"
            onClick={() => setModalShow(false)}
          >
            X
          </p>
        </div>

        <div className="flex justify-between w-full h-[90%] ">
          <div className="w-[75%] h-full border-1 border-gray-400 rounded-tr-xl">
            <textarea
              className="w-full h-full pl-2 bg-gray-100 rounded-tr-xl"
              placeholder="Enter your task"
              onChange={handleTaskChange}
              onKeyDown={handleKeyDown}
            ></textarea>
          </div>
          <div className="w-[25%] flex flex-col justify-evenly items-center">
            <button
              style={{
                backgroundColor: colors.backlog,
                border:
                  activeButton === "backlog" ? "3px solid royalblue" : "none",
              }}
              className="w-20 h-11 rounded-lg cursor-pointer"
              onClick={() => handleButtonClick("backlog")}
            >
              Backlog
            </button>
            <button
              style={{
                backgroundColor: colors.doing,
                border:
                  activeButton === "doing" ? "3px solid royalblue" : "none",
              }}
              className="w-20 h-11 rounded-lg cursor-pointer"
              onClick={() => handleButtonClick("doing")}
            >
              Doing
            </button>
            <button
              style={{
                backgroundColor: colors.review,
                border:
                  activeButton === "review" ? "3px solid royalblue" : "none",
              }}
              className="w-20 h-11 rounded-lg cursor-pointer"
              onClick={() => handleButtonClick("review")}
            >
              Review
            </button>
            <button
              style={{
                backgroundColor: colors.done,
                border:
                  activeButton === "done" ? "3px solid royalblue" : "none",
              }}
              className="w-20 h-11 rounded-lg cursor-pointer"
              onClick={() => handleButtonClick("done")}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
