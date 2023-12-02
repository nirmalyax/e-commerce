import React from "react";
import myContext from "../../context/data/myContext";

const myState = (props) => {
  const state = {
    name: "John Doe",
    roll: 15,
  };

  return (
    <myContext.Provider value={state}>{props.children}</myContext.Provider>
  );
};

export default myState;
