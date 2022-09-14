import React, { useState } from "react";
import "./App.css";

const GoalInput = (props) => {
  const [enterdText, setEnterdText] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enterdText,
    };
    setEnterdText("");
    console.log(newGoal);
    props.onAAgaol(newGoal);
  };
  const changeHandler = (event) => {
    setEnterdText(event.target.value);
  };
  return (
    <form className="NewGaol" onSubmit={submitHandle}>
      <input type="text" value={enterdText} onChange={changeHandler} />
      <button>add Goal</button>
    </form>
  );
};

export default GoalInput;
