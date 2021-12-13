import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props){
    const [counterList, setCounterList] = useState([]);

    useEffect(() =>{
        const counterList = new Array(props.size).fill(Date.now());
        setCounterList(counterList);
    },[props.size]);

    function increase(){
        props.increase();
    }

    function decrease(){
        props.decrease();
    }

    return(
        <>
        {
            counterList.map((item, index) =>
                <Counter 
                key={item + index} 
                increase={increase} 
                decrease={decrease}
                ></Counter>
            )
        }
        </>
    )
}

export default CounterGroup;