import { styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -13rem;
  .tasks-container {
    /* max-width: 400px; */
  }
  .add-bar {
    position: relative;
    margin-bottom: 2.4rem;
  }
  .add-input {
    width: 540px;
    height: 64px;
    max-width: 100%;
    border-radius: 5px;
    background: var(--secondary-background);
    box-shadow: var(--task-shadow);
    font-family: inherit;
    font-size: var(--large-medium-text);
    color: var(--task-color);
    padding-left: 3rem;
  }
  .add-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: var(--large-text);
    color: var(--small-text-color);
  }

  .tasks {
    box-shadow: var(--task-shadow);
  }

  @media (max-width: 590px) {
    margin-top: -16rem;
    .tasks-container {
      max-width: 400px;
    }
  }
  @media (max-width: 490px) {
    /* margin-top: -16rem;
    .tasks-container {
      max-width: 400px;
    } */
  }
  @media (max-width: 430px) {
    .tasks-container {
      max-width: 330px;
    }
  }
  @media (max-width: 360px) {
    .tasks-container {
      max-width: 290px;
    }
  }
`;

export default Wrapper;
