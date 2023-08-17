import { AiOutlinePlusCircle } from "react-icons/ai";

import Tasks from "../components/Tasks";

import Wrapper from "../assets/wrappers/tasksPageWrapper";

const TasksPage = () => {
  return (
    <Wrapper>
      <div className="tasks-container">
        <div className="add-bar">
          <input
            type="text"
            placeholder="Create a new todo.."
            className="add-input"
          />
          <AiOutlinePlusCircle className="add-btn" />
        </div>

        <div></div>
      </div>
    </Wrapper>
  );
};
export default TasksPage;
