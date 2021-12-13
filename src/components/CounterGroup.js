import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props){
    const [counterList, setCounterList] = useState([]);

    useEffect(() =>{
        const counterList = new Array(props.size).fill(Date.now());
        console.log(counterList)
        setCounterList(counterList);
    },[props.size]);

    return(
        <>
        {
            counterList.map((item, index) => 
                <Counter key={item + index}></Counter>
            )
        }
        </>
    )
}

export default CounterGroup;