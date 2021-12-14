import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { UPDATE_SUM } from '../constants/constants'

function Counter() {
    const [number,setNumber] = useState(0);
    const dispatch = useDispatch();

    function updateCounter(value){
        setNumber(number + value)
        dispatch({type: UPDATE_SUM, payload: value});
    }

    return(
        <div>
            <button onClick={()=>updateCounter(1)}>+</button>
            <span>{number}</span>
            <button onClick={()=>updateCounter(-1)}>-</button>
        </div>
    );  
}

export default Counter;