import { styled } from "styled-components";

const Wrapper = styled.section`
  border-bottom: 1.5px solid #e3e4f1;
  position: relative;
  z-index: 99;

  background: var(--secondary-background);
  padding: 1.8rem 2.2rem;
  .task-container {
    display: flex;
    align-items: center;
  }

  .check-icon {
    font-size: 18px;
  }

  .task-text {
    font-size: var(--medium-text);
    color: var(--task-color);
    margin-left: 24px;
  }

  .cancel {
    margin-left: auto;
  }
`;

export default Wrapper;
