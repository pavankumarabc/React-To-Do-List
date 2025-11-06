import React from "react";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
function Lists({
  task,
  editid,
  edittext,
  setEdittext,
  save,
  editing,
  del,
  toggle,
  strike,
}) {
  return (
    <>
      <div className="lists">
        <ul>
          {task.map((item, index) =>
            editid !== index ? (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={strike[index]}
                  onChange={() => toggle(index)}
                />
                <span
                  style={{
                    textDecoration: strike[index] ? "line-through " : "none",
                  }}
                >
                  {" "}
                  {item}
                </span>
                <div className="btn">
                  <span
                    className="icons"
                    style={{
                      color: "blue",
                      backgroundColor: "white",
                    }}
                  >
                    {" "}
                    <MdEdit
                      className="btns"
                      onClick={() => editing(item, index)}
                    />
                  </span>
                  <span
                    className="icons"
                    style={{ color: "red", backgroundColor: "white" }}
                  >
                    {" "}
                    <FaTrashCan onClick={() => del(index)} />
                  </span>
                </div>
              </li>
            ) : (
              <li key={index}>
                <input
                  className="box2"
                  type="text"
                  value={edittext}
                  onChange={(e) => setEdittext(e.target.value)}
                />
                <span className="btns">
                  {" "}
                  <div className="btn">
                    {" "}
                    <FaSave
                      className="icons"
                      onClick={save}
                      style={{ color: "palegreen", backgroundColor: "white" }}
                    />
                  </div>
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
export default Lists;
