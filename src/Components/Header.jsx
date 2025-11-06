import React from "react";

function Header({ newtask, setNewtask, add, clear }) {
  return (
    <>
      <div className="header">
        <div className="logo">To-do-list</div>

        <div className="box">
          <input
            type="text"
            placeholder="add tasks"
            value={newtask}
            onChange={(e) => {
              setNewtask(e.target.value);
            }}
          />

          <div className="btns">
            <button onClick={add}>Add</button>
            <button onClick={clear}>Clear</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
