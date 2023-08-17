import { AiOutlinePlusCircle } from "react-icons/ai";

import Tasks from "../components/Tasks";

import Wrapper from "../assets/wrappers/tasksPageWrapper";

const TasksPage = () => {
  return (
    <Wrapper>
      <div className="tasks-container">
        <form className="add-bar">
          <input
            type="text"
            placeholder="Create a new todo.."
            className="add-input"
          />
          <button>
            <AiOutlinePlusCircle className="add-btn" />
          </button>
        </form>

        <div className="tasks">
          <Tasks />
        </div>
      </div>
    </Wrapper>
  );
};
export default TasksPage;
