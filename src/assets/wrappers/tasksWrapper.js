import { styled } from "styled-components";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: relative;
  background: var(--secondary-background);
  /* padding: 1.8rem 2.2rem; */

  z-index: 999;
  .tasks-container {
  }

  .task-container {
    display: flex;
    align-items: center;
    border-bottom: 1.5px solid #e3e4f1;
    padding: 20px 24px 15px 24px;
  }

  .check-container {
    border: 1px solid var(--main-color);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  .check-icon {
    display: none;
  }
  .check-container:hover .check-icon {
    cursor: pointer;
    display: block;
    font-size: 18px;
    background: var(--main-color);
    padding: 1px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    color: var(--white-color);
  }

  .task-text {
    font-size: var(--medium-text);
    color: var(--task-color);
    margin-left: 24px;
  }
  .complete {
    .check-icon {
      /* transform: translate(-50%, -50%); */
      display: block;
      font-size: 18px;
      background: var(--main-color);
      padding: 1px;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      color: var(--white-color);
    }

    .task-text {
      color: var(--complete-task-color);
      text-decoration-line: line-through;
    }
  }

  .cancel {
    margin-left: auto;
  }

  .additional-info {
    padding: 20px 24px 15px 24px;
    color: var(--filter-btn-color);
    font-size: var(--small-text);
    display: flex;
    justify-content: space-between;
    button {
      color: var(--filter-btn-color);
      font-size: var(--small-text);
      font-family: inherit;
    }
  }
  .action-btns {
    display: flex;
    column-gap: 18px;
    button {
      font-weight: 700;
    }
  }
`;

export default Wrapper;
