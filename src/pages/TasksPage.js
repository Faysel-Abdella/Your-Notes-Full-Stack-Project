import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import Tasks from "../components/Tasks";

import Wrapper from "../assets/wrappers/tasksPageWrapper";

import customFetch from "../utils/customeFecth";

const token = localStorage.getItem("token");

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTaskTitle = event.target.title.value;

    const newTask = { title: newTaskTitle };

    // Send the new task to the server
    customFetch
      .post("/task", { token, title: newTaskTitle })
      .then((response) => {
        toast.success("Task added", { autoClose: 2000 });

        // Fetch the tasks again to get the updated list
        customFetch
          .post("/tasks", { token })
          .then((response) => {
            const { tasks } = response.data;
            setTasks(tasks);
          })
          .catch((error) => {
            console.error("Failed to fetch tasks", error);
          });
      })
      .catch((error) => {
        console.error("Failed to add task", error);
      });

    // Clear the input field
    event.target.title.value = "";
  };

  useEffect(() => {
    // Fetch tasks from the server
    customFetch
      .post("/tasks", { token })
      .then((response) => {
        const { tasks } = response.data;
        //  setTasks(tasks);
        setTasks(tasks);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks", error);
      });
  }, []);

  return (
    <Wrapper>
      <div className="tasks-container">
        <form className="add-bar" method="POST" onSubmit={handleAddTask}>
          <input
            name="title"
            type="text"
            placeholder="Create a new todo.."
            className="add-input"
            required
          />
          <input name="token" value={token} type="hidden" />
          <button type="submit">
            <AiOutlinePlusCircle className="add-btn" />
          </button>
        </form>

        <div className="tasks">
          <Tasks tasks={tasks} />
        </div>
        <div className="below-action-btns">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default TasksPage;
