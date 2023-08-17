import cancel from "../assets/images/cancle.svg";

import { BsCheckLg } from "react-icons/bs";

import Wrapper from "../assets/wrappers/taskWrapper";

const Task = () => {
  return (
    <Wrapper>
      <div className="task-container">
        <span className="check-container">
          <BsCheckLg className="check-icon" />
        </span>

        <p className="task-text">Do the first task</p>

        <div className="cancel">
          <img src={cancel} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Task;
