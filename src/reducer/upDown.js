import React from "react";

const intialState = 0;
const changeCount = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeCount;
