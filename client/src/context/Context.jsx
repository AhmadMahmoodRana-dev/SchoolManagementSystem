import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext();
const ContextProvider = (props) => {
  const user = true;
  const [toogleSidebar, setToogleSidebar] = useState("true");


 


  // ### CONTEXT VALUES

  const contextValue = {
    user,
    toogleSidebar,
    setToogleSidebar,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
