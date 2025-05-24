import React, { useContext } from "react";
import colors from "../styles/colors";
import { StoreContext } from "../context/StoreContext";

function ModalContainer() {
  const { setModalShow } = useContext(StoreContext);
  return (
    <div>
      <div className="w-[30vw] h-[35vh] fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] border-1 ml-5 mt-5  border-gray-400 bg-gray-200">
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
            ></textarea>
          </div>
          <div className="w-[25%] flex flex-col justify-evenly items-center">
            <button
              style={{ backgroundColor: colors.backlog }}
              className="w-20 h-11 rounded-lg cursor-pointer"
            >
              Backlog
            </button>
            <button
              style={{ backgroundColor: colors.doing }}
              className="w-20 h-11 rounded-lg cursor-pointer"
            >
              Doing
            </button>
            <button
              style={{ backgroundColor: colors.review }}
              className="w-20 h-11 rounded-lg cursor-pointer"
            >
              Review
            </button>
            <button
              style={{ backgroundColor: colors.done }}
              className="w-20 h-11 rounded-lg cursor-pointer"
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
