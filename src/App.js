import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Lists from "./Components/Lists";

function App() {
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");
  const [edittext, setEdittext] = useState("");
  const [editid, setEditid] = useState(null);
  const [strike, setStrike] = useState([]);

  function add() {
    if (newtask.trim() === "") {
      return;
    }
    setTask([...task, newtask]);
    setNewtask("");
    setStrike([...strike, false]);
  }
  function clear() {
    setTask([]);
    setStrike([]);
  }
  function editing(item, index) {
    setEdittext(item);
    setEditid(index);
  }
  function toggle(index) {
    const update = [...strike];
    update[index] = !update[index];
    setStrike(update);
  }
  function save() {
    const update = [...task];
    update[editid] = edittext;
    setTask(update);
    setEditid(null);
    setEdittext("");
  }
  function del(index) {
    const updatedtasks = task.filter((_, id) => id !== index);
    const updatedstrike = strike.filter((_, id) => id !== index);
    setTask(updatedtasks);
    setStrike(updatedstrike);
  }

  return (
    <>
      <Header
        newtask={newtask}
        setNewtask={setNewtask}
        add={add}
        clear={clear}
      />

      <Lists
        task={task}
        editid={editid}
        edittext={edittext}
        setEdittext={setEdittext}
        save={save}
        editing={editing}
        del={del}
        toggle={toggle}
        strike={strike}
      />
    </>
  );
}
export default App;
