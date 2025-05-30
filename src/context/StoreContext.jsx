import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [isModalShow, setModalShow] = useState(false);
  const [arrTickets, setArrTickets] = useState([]);
  const [activeButton, setActiveButton] = useState("backlog"); // State to track active button
  const [deleteActive, setDeleteActive] = useState(false);
  const [ticketDelete, setTicketDelete] = useState(null);
  const [filterColor, setFilterColor] = useState("all"); // State for filtering tickets by color

  // Load tickets from localStorage when component mounts
  useEffect(() => {
    const savedTickets = localStorage.getItem("kanban-tickets");
    if (savedTickets) {
      try {
        const parsedTickets = JSON.parse(savedTickets);
        setArrTickets(parsedTickets);
      } catch (error) {
        console.error("Error parsing saved tickets: ", error);
        // If there's an error parsing, start with empty array
        setArrTickets([]);
      }
    }
  }, []);

  // Save tickets to localStorage whenever arrTickets changes
  useEffect(() => {
    if (arrTickets.length > 0) {
      localStorage.setItem("kanban-tickets", JSON.stringify(arrTickets));
    } else {
      // If no tickets, remove the item from localStorage
      localStorage.removeItem("kanban-tickets");
    }
  }, [arrTickets]);

  // Function to delete a ticket by ID
  const deleteTicket = (ticketId) => {
    setArrTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.tid !== ticketId)
    );
  };

  // Watch for ticketDelete changes and delete when in delete mode
  useEffect(() => {
    if (deleteActive && ticketDelete) {
      deleteTicket(ticketDelete);
      setTicketDelete(null); // Reset after deletion
    }
  }, [ticketDelete, deleteActive]);
  const contextValue = {
    isModalShow,
    setModalShow,
    arrTickets,
    setArrTickets,
    activeButton,
    setActiveButton,
    deleteActive,
    setDeleteActive,
    ticketDelete,
    setTicketDelete,
    deleteTicket, // Expose delete function
    filterColor,
    setFilterColor,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
