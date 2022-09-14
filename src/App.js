import "./App.css";
import Goallist from "./Goallist";
import GoalInput from "./GoalInput";
import React, { useState } from "react";
function App() {
  const [datagaol, setDatagoal] = useState([
    { id: "1", text: "we going to learn javascript ha" },
    { id: "2", text: "we going to learn react inshaa Allah" },
    { id: "3", text: "we going to learn react native inshaa Allah" },
  ]);

  const Gaolhandler = (newGaol) => {
    // setDatagoal(datagaol.concat(newGaol));
    setDatagoal((preSetgoal) => preSetgoal.concat(newGaol));
  };

  return (
    <div className="App">
      <h1 className="centers">Goal course</h1>
      <GoalInput onAAgaol={Gaolhandler} />

      <Goallist goal={datagaol} />
    </div>
  );
}

export default App;
