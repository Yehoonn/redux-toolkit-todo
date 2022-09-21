import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { remove, edit, editComplete } from "../Redux/Slice/dataSlice";
import { memo } from "react";
import { editOn } from "../Redux/Slice/inputSlice";
import { useSelector } from "react-redux";
const ItemBox = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin-bottom: 20px;

  & > h1 {
    font-size: 2rem;
    margin-left: 20px;
  }

  & > div {
    display: flex;
    gap: 10px;
    margin-right: 10px;
  }

  & > div > button {
    border-radius: 10px;
    border: 0px solid white;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
  }

  & > input {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 18px;
    width: 70%;
    height: 80%;
    border-radius: 10px;
    border: 0px solid white;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const TodoItem = ({ value }) => {
  const EnterKey = (e) => {
    if (e.key === "Enter") {
      disPatch(editComplete(editData));
    }
  };

  const { editData } = useSelector((store) => store.input);
  const disPatch = useDispatch();
  return (
    <>
      <ItemBox>
        {value.edit === true ? (
          <input
            defaultValue={value.text}
            onChange={(e) =>
              disPatch(
                editOn({ editValue: e.target.value, textValue: value.text })
              )
            }
            onKeyPress={EnterKey}
          ></input>
        ) : (
          <h1>{value.text}</h1>
        )}

        <div>
          {value.edit === true ? (
            <button
              onClick={() => {
                disPatch(editComplete(editData));
              }}
            >
              완료
            </button>
          ) : (
            <button
              onClick={() => {
                disPatch(edit(value.id));
                disPatch(
                  editOn({ editValue: value.text, textValue: value.text })
                );
              }}
            >
              수정
            </button>
          )}
          {value.edit === true ? (
            <button onClick={() => disPatch(edit(value.id))}>취소</button>
          ) : (
            <button onClick={() => disPatch(remove(value.id))}>삭제</button>
          )}
        </div>
      </ItemBox>
    </>
  );
};

export default memo(TodoItem);
