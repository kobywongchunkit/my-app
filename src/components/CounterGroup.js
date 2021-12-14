import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Counter from "./Counter";

function CounterGroup(){
    const [counterList, setCounterList] = useState([]);
    const size = useSelector(state => state.size);

    useEffect(() =>{
        const counterList = new Array(size).fill(Date.now());
        setCounterList(counterList);
    },[size]);

    return(
        <>
        {
            counterList.map((item, index) =>
                <Counter 
                key={item + index} 
                ></Counter>
            )
        }
        </>
    )
}

export default CounterGroup;