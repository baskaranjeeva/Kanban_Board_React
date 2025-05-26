import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [isModalShow, setModalShow] = useState(false);
  const [arrTickets, setArrTickets] = useState([]);
  const [activeButton, setActiveButton] = useState("backlog"); // State to track active button

  const contextValue = {
    isModalShow,
    setModalShow,
    arrTickets,
    setArrTickets,
    activeButton,
    setActiveButton,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
