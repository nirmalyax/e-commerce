import React, { useState } from "react";
import myContext from "../../context/data/myContext";

const myState = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <myContext.Provider value={{mode, toggleMode}}>
      {props.children}
    </myContext.Provider>
  );
};

export default myState;
