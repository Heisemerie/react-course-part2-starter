import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";
import { useCounterStore } from "./index";

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(counterReducer, 0); //dispatch an action
  // const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      {/* <button onClick={() => setCounter(counter + 1)} className="btn btn-primary mx-1"> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })} className="btn btn-primary mx-1">
        {/* <button onClick={() => increment()} className="btn btn-primary mx-1"> */}
        Increment
      </button>
      {/* <button onClick={() => setCounter(0)} className="btn btn-primary mx-1"> */}
      <button onClick={() => dispatch({ type: "RESET" })} className="btn btn-primary mx-1">
        {/* // <button onClick={() => reset()} className="btn btn-primary mx-1"> */}
        Reset
      </button>
    </div>
  );
};

export default Counter;
