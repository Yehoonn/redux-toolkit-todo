import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const ListBox = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 55%;
  background-color: rgba(25, 12, 125, 0.4);
  border-radius: 10px;
  display: flex;
  overflow: auto;
`;

const CenterBox = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TodoList = () => {
  const data = useSelector((state) => state.data);
  const list = data.map((value, index) => {
    return <TodoItem key={index} value={value}></TodoItem>;
  });

  return (
    <>
      <ListBox>
        <CenterBox>{list}</CenterBox>
      </ListBox>
    </>
  );
};

export default TodoList;
