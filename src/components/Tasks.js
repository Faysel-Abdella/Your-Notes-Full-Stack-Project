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

const Tasks = ({ tasks }) => {
  const [tasksList, setTasksList] = useState([]);
  const [onlyActiveTasks, setOnlyActiveTasks] = useState([]);
  const [onlyCompletedTasks, setOnlyCompletedTasks] = useState([]);

  const [whichTasksToShow, setWhichTasksToShow] = useState(tasks);

  const [leftTasks, setLeftTasks] = useState(0);

  useEffect(() => {
    setWhichTasksToShow(tasks);
  }, [tasks]);

  useEffect(() => {
    setTasksList([...tasks]);
  }, [tasks]);

  useEffect(() => {
    let taskLeftNum = 0;
    // Update leftTasks whenever tasksList changes
    setLeftTasks(() => {
      tasksList.forEach((task) => {
        if (!task.completed) {
          taskLeftNum += 1;
        }
      });
      return taskLeftNum;
    });
  }, [tasksList]);

  useEffect(() => {
    customFetch
      .get("/tasks/actives")
      .then((response) => {
        const { activeTasks } = response.data;
        //  setTasks(tasks);

        setOnlyActiveTasks([...activeTasks]);
      })
      .catch((error) => {});
  }, [tasks]);

  useEffect(() => {
    customFetch
      .get("/tasks/completed")
      .then((response) => {
        const { completedTasks } = response.data;
        setOnlyCompletedTasks([...completedTasks]);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks", error);
      });
  }, [tasks]);

  // ######### //

  const showAllTasks = () => {
    setWhichTasksToShow(tasksList);
  };

  const showActiveTasks = () => {
    setWhichTasksToShow(onlyActiveTasks);
  };

  const showCompletedTasks = () => {
    setWhichTasksToShow(onlyCompletedTasks);
  };

  // ######### //

  const deleteTaskHandler = async (taskId) => {
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

      setLeftTasks((prevLeftTasks) => --prevLeftTasks);
    } catch (error) {}
  };

  return (
    <Wrapper>
      <div className="tasks-container">
        {whichTasksToShow.length === 0 ? (
          <p className="no-task">No task is there.</p>
        ) : (
          whichTasksToShow.map((task, index) => {
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
          <span>{leftTasks} items left</span>
          <span className="action-btns">
            <button onClick={showAllTasks}>All</button>
            <button onClick={showActiveTasks}>Active</button>
            <button onClick={showCompletedTasks}>Completed</button>
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
