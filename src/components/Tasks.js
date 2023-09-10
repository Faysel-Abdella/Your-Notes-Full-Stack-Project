import cancel from "../assets/images/cancle.svg";

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
  // console.log(" This is the task when accepting", tasks);
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    setTasksList([...tasks]);
  }, [tasks]);

  const deleteTaskHandler = async (taskId) => {
    console.log("The task id", taskId);
    try {
      await customFetch.delete(`/task/${taskId}`);
      // Update the tasks state immediately to disappear the task immediately after clicking the delete Btn
      setTasksList((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskId)
      );
      return toast.success("Task Deleted", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

  const markAsCompleted = async (taskId) => {
    let completedValue = true;
    try {
      tasksList.forEach((task) => {
        if (task._id === taskId) {
          if (task.completed) {
            completedValue = false;
          }
        }
      });

      await customFetch.patch(`/task/${taskId}`, { completed: completedValue });

      setTasksList((prevTasksList) =>
        prevTasksList.map((task) => {
          if (task._id === taskId) {
            return {
              ...task,
              completed: completedValue,
            };
          }
          return task;
        })
      );
    } catch (error) {}
  };

  return (
    <Wrapper>
      <div className="tasks-container">
        {tasksList.length === 0 ? (
          <p className="no-task">No task is there.</p>
        ) : (
          tasksList.map((task, index) => {
            console.log("This is the task in loop", task);
            return (
              <div
                className={`task-container ${
                  task.completed === true ? "complete" : ""
                }`}
                key={Math.random()}
              >
                <span
                  className={`check-container `}
                  onClick={() => markAsCompleted(task._id)}
                >
                  <BsCheckLg
                    className="check-icon"
                    onClick={() => markAsCompleted(task._id)}
                  />
                </span>

                <p className="task-text">{task.title}</p>

                <button
                  className="cancel"
                  onClick={() => deleteTaskHandler(task._id)}
                >
                  <img src={cancel} alt="" className="cancel-img" />
                </button>
              </div>
            );
          })
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
