import { act } from "react";
import "../css/Container.css";
import Button from "./Button";

export default function ListItems({ tasks, action, actionComplete, actionRename}) {
  return (
    <ol className="list-items">
      {tasks.map((task, index) => (
        <li key={index}>
          <div className="list-content">
            <p
              onClick={() => actionComplete(index)}
              style={{
                textDecoration: task.isComplete ? "line-through" : "none",
                color: task.isComplete ? "grey":"black",
                cursor: "pointer"
              }}
            >
             {task.text}
            </p>
            <div className="list-content-options" >
                          <img
              onClick={() => action(index)}
              src="../src/assets/remove.png"
              alt="Delete Image"
              style={{ maxWidth: "25px", maxHeight: "25px", cursor: "pointer" }}
            />
            <Button text="Rename" action={() => actionRename(index)} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
