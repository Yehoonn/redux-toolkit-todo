import { useSelector } from "react-redux";
import { plus, minus } from "../Redux/Slice/counterSlice";
import { useDispatch } from "react-redux/es/exports";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const disPatch = useDispatch();

  return (
    <>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => disPatch(plus())}>+ 1</button>
        <button onClick={() => disPatch(minus())}>- 1</button>
      </div>
    </>
  );
};

export default Counter;
