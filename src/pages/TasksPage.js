import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import Tasks from "../components/Tasks";

import Wrapper from "../assets/wrappers/tasksPageWrapper";

import customFetch from "../utils/customeFecth";

const token = localStorage.getItem("token");

// export const action = async ({ request }) => {
//   //Change the request to the formData to simplify
//   const formData = await request.formData();
//   //Change the formData w/c is array to normal JS obj to send to the backend
//   const data = Object.fromEntries(formData);

//   try {
//     await customFetch.post("/task", { ...data, token });
//     // toast.success("Login success, login page", { autoClose: 3000 });
//     // return res.status(201).json({message: "task added"})
//     return toast.success("Task added", { autoClose: 2000 });
//   } catch (error) {
//     console.log(error);
//     error.message = error?.response?.data?.message;
//     return error;
//   }
// };

const TasksPage = () => {
  console.log("Request for task....");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTaskTitle = event.target.title.value;

    const newTask = { title: newTaskTitle };

    // Update the tasks state immediately
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear the input field
    event.target.title.value = "";

    // Send the new task to the server (you'll need to implement this)
    customFetch
      .post("/task", { token, title: newTaskTitle })
      .then((response) => {
        // Handle the server response if needed
        toast.success("Task added", { autoClose: 2000 });
      })
      .catch((error) => {
        console.error("Failed to add task", error);
      });
  };

  useEffect(() => {
    // Fetch tasks from the server
    customFetch
      .post("/tasks", { token })
      .then((response) => {
        const { tasks } = response.data;
        //  setTasks(tasks);
        console.log(tasks);
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
