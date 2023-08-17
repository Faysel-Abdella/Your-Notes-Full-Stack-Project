import cancel from "../assets/images/cancle.svg";

import { BsCheckLg } from "react-icons/bs";

import Wrapper from "../assets/wrappers/tasksWrapper";

const tasks = [
  { title: "Do the first task", state: "not-complete" },
  { title: "Do the first task", state: "not-complete" },
  { title: "Do the first task", state: "not-complete" },
  { title: "Do the first task", state: "not-complete" },
];

const Tasks = () => {
  return (
    <Wrapper>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div
            className={`task-container ${true ? "com" : ""}`}
            key={Math.random()}
          >
            <span className="check-container">
              <BsCheckLg className="check-icon" />
            </span>

            <p className="task-text">do one task</p>

            <button className="cancel">
              <img src={cancel} alt="" />
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default Tasks;
