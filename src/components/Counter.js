import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../redux/actionCreators/counterAction';

const Counter = () => {
    const counter = useSelector(state => state.counterReducer.counter);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Initial Value of Counter is: 10 </h2>
            <button style={{ margin: "10px" }} onClick={() => dispatch(decreaseCounter())}>
                -
            </button>
            <b style={{ fontSze: "large" }}> Counter: {counter}</b>
            <button style={{ margin: "10px" }} onClick={() => dispatch(increaseCounter())}>
                +
            </button>
        </div>
    )
}

export default Counter;