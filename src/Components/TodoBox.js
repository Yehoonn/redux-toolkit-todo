import styled from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const StyledBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  width: 100%;

  &:hover {
    color: lightseagreen;
    cursor: pointer;
    font-size: 2.1rem;
  }
`;

const StyledAlink = styled.a`
  width: 100%;
  text-decoration: none;
  text-align: center;

  &:link {
    color: black;
  }

  &:visited {
    color: black;
  }

  &:active {
    color: black;
  }
`;

const TodoBox = () => {
  return (
    <>
      <StyledBox>
        <StyledAlink
          style={{ textDecoration: "none" }}
          href="https://redux-toolkit.js.org/"
        >
          <StyledH1>Created by Redux ToolKit</StyledH1>
        </StyledAlink>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </StyledBox>
    </>
  );
};

export default TodoBox;
