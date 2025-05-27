import React, { useContext, useEffect } from "react";
import addBtn from "/add_icon3.png";
import delBtn from "/delete_icon3.png";
import colors from "../styles/colors";
import { StoreContext } from "../context/StoreContext";
function Navbar() {
  const {
    isModalShow,
    setModalShow,
    deleteActive,
    setDeleteActive,
    filterColor,
    setFilterColor,
  } = useContext(StoreContext);

  function dispModal() {
    setModalShow(!isModalShow);
    // toggleModle();
    // console.log("Value: ", isModalShow);
  }
  function toggleDelete() {
    setDeleteActive(!deleteActive);
    // console.log(deleteActive);
  }
  // Handle filter button clicks
  const handleFilterClick = (color) => {
    setFilterColor(filterColor === color ? "all" : color);
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-[#008299]">
        <div className="ml-8 flex flex-col items-center">
          <h2 className="text-lg font-semibold">Priority Level</h2>
          <div className="flex flex-col mt-2 w-40">
            <button
              className={`w-full bg-[#FF8585] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 ${
                filterColor === "backlog"
                  ? "ring-4 ring-blue-400 ring-opacity-75"
                  : ""
              }`}
              onClick={() => handleFilterClick("backlog")}
            >
              Backlog {filterColor === "backlog" ? "✓" : ""}
            </button>
            <button
              className={`w-full bg-[#FFD659] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                filterColor === "doing"
                  ? "ring-4 ring-blue-400 ring-opacity-75"
                  : ""
              }`}
              onClick={() => handleFilterClick("doing")}
            >
              Doing {filterColor === "doing" ? "✓" : ""}
            </button>
            <button
              className={`w-full bg-[#A4E6FF] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${
                filterColor === "review"
                  ? "ring-4 ring-blue-400 ring-opacity-75"
                  : ""
              }`}
              onClick={() => handleFilterClick("review")}
            >
              Review {filterColor === "review" ? "✓" : ""}
            </button>
            <button
              className={`w-full bg-[#8FF58F] cursor-pointer text-gray-900 rounded-md py-1 px-4 mb-1 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 ${
                filterColor === "done"
                  ? "ring-4 ring-blue-400 ring-opacity-75"
                  : ""
              }`}
              onClick={() => handleFilterClick("done")}
            >
              Done {filterColor === "done" ? "✓" : ""}
            </button>
          </div>
        </div>
        <div>
          <div className="flex  gap-7 ml-20">
            <div>
              <img
                onClick={() => dispModal()}
                className="w-12  mt-3 cursor-pointer hover:opacity-80 transition-opacity"
                src={addBtn}
                alt="Add Ticket"
              />
            </div>
            <div className="relative">
              <button
                className={`p-2 rounded-lg transition-all duration-200 ${
                  deleteActive
                    ? "bg-red-500 ring-4 ring-red-300 ring-opacity-75"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => toggleDelete()}
              >
                <img
                  className={`w-13 cursor-pointer transition-all duration-200 ${
                    deleteActive ? "filter brightness-0 invert" : ""
                  }`}
                  src={delBtn}
                  alt="Delete Mode"
                />
              </button>

              {/* Delete mode indicator */}
              {deleteActive && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  DELETE MODE
                </div>
              )}
            </div>
          </div>

          {/* Status text below buttons */}
          <div className="text-center mt-2 text-sm">
            {deleteActive ? (
              <span className="text-red-200 font-semibold animate-pulse">
                🗑️ Click tickets to delete
              </span>
            ) : (
              <span className="text-gray-300 pl-15">➕ Add | 🗑️ Delete</span>
            )}
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
            {/* <div className="flex mb-1">
              <label>Sprint Duration: </label>
              <p>10</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
