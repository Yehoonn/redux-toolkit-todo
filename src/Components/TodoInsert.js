import styled from "styled-components";
import { change, reset } from "../Redux/Slice/inputSlice";
import { useDispatch } from "react-redux/es/exports";
import { insert } from "../Redux/Slice/dataSlice";
import { useSelector } from "react-redux";

const StyledInput = styled.input`
  width: 400px;
  height: 80px;
  text-align: center;
  border-radius: 10px;
  border: 0px solid white;
  font-size: 1.3rem;
`;

const InsertBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const StyledButton = styled.button`
  width: 160px;
  height: 40px;
  border: 0px solid white;
  font-size: 1.5rem;
  color: black;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  &:hover {
    background-color: lightcoral;
    cursor: pointer;
  }
`;

const TodoInsert = () => {
  const { inputData } = useSelector((store) => store.input);
  const disPatch = useDispatch();

  const EnterKey = (e) => {
    if (e.key === "Enter") {
      disPatch(insert(inputData));
      disPatch(reset());
    }
  };

  return (
    <InsertBox>
      <StyledInput
        type="text"
        placeholder="데이터를 입력해주세요"
        onChange={(e) => {
          disPatch(change(e.target.value));
        }}
        onKeyPress={EnterKey}
        value={inputData}
      ></StyledInput>
      <StyledButton
        onClick={() => {
          disPatch(insert(inputData));
          disPatch(reset());
        }}
      >
        데이터 추가
      </StyledButton>
    </InsertBox>
  );
};

export default TodoInsert;
