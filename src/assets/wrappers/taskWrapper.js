import { styled } from "styled-components";

const Wrapper = styled.section`
  background: var(--secondary-background: );
  padding: 1.8rem 2.2rem;
  .task-container {
    display: flex;
    align-items: center;
  }

  .task-text {
    font-size: var(--medium-text);
    color: var(--task-color);
  }

  .cancel {
    margin-left: auto;
  }
`;

export default Wrapper;
