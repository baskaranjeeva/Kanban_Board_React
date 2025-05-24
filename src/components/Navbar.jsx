import React, { useContext, useEffect } from "react";
import addBtn from "/add_icon3.png";
import delBtn from "/delete_icon3.png";
import colors from "../styles/colors";
import { StoreContext } from "../context/StoreContext";
function Navbar() {
  const { isModalShow, setModalShow } = useContext(StoreContext);

  function dispModal() {
    setModalShow(!isModalShow);
    // toggleModle();
    console.log("Value: ", isModalShow);
  }

  return (
    <div>
      <div className="flex justify-between items-center bg-[#008299]">
        <div className="ml-8 flex flex-col items-center">
          <h2 className="text-lg font-semibold">Priority Level</h2>
          <div className="flex flex-col mt-2 w-40">
            <button className="w-full bg-[#FF8585] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              Backlog
            </button>
            <button className="w-full bg-[#FFD659] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
              Doing
            </button>
            <button className="w-full bg-[#A4E6FF] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
              Review
            </button>
            <button className="w-full bg-[#8FF58F] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
              Done
            </button>
          </div>
        </div>
        <div>
          <div className="flex  gap-7 ml-20">
            <div>
              <img
                onClick={() => dispModal()}
                className="w-12 cursor-pointer"
                src={addBtn}
                alt=""
              />
            </div>
            <button>
              <img className="w-13 cursor-pointer" src={delBtn} alt="" />
            </button>
          </div>
        </div>
        <div className="mr-5">
          <h2 className="text-lg font-semibold">Project Details</h2>
          <div className="flex flex-col mt-2 w-60  text-gray-800">
            <div className="mb-1">
              <input
                type="text"
                className="text-gray-900 border-1 border-[#035b6a] w-full pl-0.5"
                placeholder="Enter Project Name"
              />
            </div>
            <div className="flex justify-between mb-1">
              <label>Sprint Start:</label>
              <input type="date" placeholder="Sprint Start" />
            </div>
            <div className="flex justify-between mb-1">
              <label>Sprint End:</label>
              <input type="date" placeholder="Sprint End" />
            </div>
            <div className="flex mb-1">
              <label>Sprint Duration: </label>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
