import Button from "../Button";
import ToDoHeader from "./HeaderContainer";
import "../../css/Container.css";
import ListItems from "../ListItems";
import InputText from "../InputText";
import { useState } from "react";
import LoginModal from "./LoginModal";
import Register from "./RegisterModal";

export default function ToDoContainer() {
  const [task, setTask] = useState([]);
  const [taskId, setTaskId] = useState(1);
  //  const [task, setTask] = useState([{ text: "Some Item", isComplete: false }]); //THIS IS A SAMPLE TASK
  const [addTask, setAddTask] = useState("");
  const readableDate = new Date(Date.now()).toLocaleString();

  const [isAuthenticated, setisAuthenticated] = useState(false);

  const handleLogin = () => setisAuthenticated(true);
  const handleLogout = () => {
    setisAuthenticated(false)
    alert("Successfully Logged Out!");
  }

  function handleAddTask() {

    const newTask = {
      id: taskId,
      text: addTask,
      created_date: readableDate,
      isComplete: false
    };

    if(!isAuthenticated && task.length>=3){
      alert("Please log in to add more than 3 task!")
    }else{
      if (addTask.trim() !== "") {
      setTaskId(td => td + 1);
      setTask(prev => [...prev, newTask]);
      setAddTask("");
      console.log(task)
    }
    }

  }
  const handleAddTaskChange = (e) => {
    setAddTask(e.target.value);
  };

  const handleRemoveTask = (indexToRemove) => {
    setTask(t => t.filter((_, index) => index !== indexToRemove));
  };

  const handleActionComplete = (indexToToggle) => {
    setTask(t =>
      t.map((item, index) =>
        index === indexToToggle ? { ...item, isComplete: !item.isComplete } : item
      )
    );
    console.log(task);
  };

  const handleClearTask = (indexToRemove) => {
    setTask(t => t.filter((_, index) => index === indexToRemove));
  }

  const handleRename = (indexToRename) => {
    const newTaskName = prompt("Enter a new Task name: ");
    if (newTaskName) {
      setTask(prev => prev.map((task, index) => index === indexToRename ? { ...task, text: newTaskName } : task))
    }
  }

  const completedCount = task.filter(t => t.isComplete).length;
  const notCompletedCount = task.filter(t => !t.isComplete).length;
  const taskLength = task.length;

  return (
    <div className="parent-container">
      <ToDoHeader text={`${completedCount}/${notCompletedCount}`} />
      <div className="main-container">
        <div className="left-side-container">
          <ListItems
            tasks={task}
            action={handleRemoveTask}
            actionComplete={handleActionComplete}
            actionRename={handleRename}
          />
        </div>
        <div className="right-side-container">
          <div className="add-todo-list">
            <InputText handleInputChange={handleAddTaskChange} value={addTask} />
            <Button text="Add Task" action={handleAddTask} />
            {taskLength > 0 && <Button text="Clear All Task" action={handleClearTask} />}
          </div>
          <div className="bottom-right-container">
            {isAuthenticated ? (
              <Button action={handleLogout} text="Logout" />
            ) : (
              <>
                <LoginModal onLoginSuccess={handleLogin} />
                <Register />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
