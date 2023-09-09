import cancel from "../assets/images/cancle.svg";

import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { BsCheckLg } from "react-icons/bs";

import customFetch from "../utils/customeFecth";

import Wrapper from "../assets/wrappers/tasksWrapper";

// const tasks = [
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
// ];

const token = localStorage.getItem("token");

const Tasks = ({ tasks }) => {
  // console.log("Request for task....");
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   // Fetch tasks from the server
  //   customFetch
  //     .post("/tasks", { token })
  //     .then((response) => {
  //       const { tasks } = response.data;
  //       //  setTasks(tasks);
  //       console.log(tasks);
  //       setTasks(tasks);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch tasks", error);
  //     });
  // }, []);

  const deleteTaskHandler = async (taskId) => {
    try {
      await customFetch.delete(`/task/${taskId}`);
      return toast.success("Task Deleted", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <p className="no-task">No task is there.</p>
        ) : (
          tasks.map((task, index) => (
            <div
              className={`task-container ${true ? "com" : ""}`}
              key={Math.random()}
            >
              <span className="check-container">
                <BsCheckLg className="check-icon" />
              </span>

              <p className="task-text">{task.title}</p>

              <button
                className="cancel"
                onClick={() => deleteTaskHandler(task._id)}
              >
                <img src={cancel} alt="" className="cancel-img" />
              </button>
            </div>
          ))
        )}

        <div className="additional-info">
          <span>5 items left</span>
          <span className="action-btns">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </span>
          <span>
            <button>Clear Completed</button>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
export default Tasks;
