import React from "react";
import "./App.css";

const Goallist = (props) => {
  console.log(props.goal);
  return (
    <ul className="goallist">
      {props.goal.map((goals) => {
        return <li key={goals.id}>{goals.text}</li>;
      })}
    </ul>
  );
};

export default Goallist;
