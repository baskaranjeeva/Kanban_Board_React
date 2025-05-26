import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import colors from "../styles/colors";
function Ticket({ data }) {
  const { activeButton } = useContext(StoreContext);
  console.log("In Ticket", data);
  return (
    <div>
      <div className="w-[12rem] h-[10rem] border-1 border-gray-400 ml-5 mt-5 text-sm">
        <div
          className="w-full pl-1"
          style={{
            backgroundColor: colors[data.tcolor] || "transparent",
          }}
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
