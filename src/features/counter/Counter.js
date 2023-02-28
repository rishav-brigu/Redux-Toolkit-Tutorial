import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    const [incrementValue, setIncrementValue] = useState(0);
    const addValue = Number(incrementValue) || 0;

    const resetAll = () => {
        dispatch(reset());
        setIncrementValue(0);
    };


  return (
      <section>
          <p>{count}</p>
          <div>
              <button onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(decrement())}>-</button>
          </div>
          <input
              type="text"
              value={incrementValue}
              onChange={(e) => setIncrementValue(e.target.value)}
          />
          <div>
              <button onClick={() => dispatch(incrementByValue(addValue))}>Add By Value</button>
              <button onClick={() => dispatch(resetAll)}>Reset</button>
          </div>
    </section>
  )
}

export default Counter