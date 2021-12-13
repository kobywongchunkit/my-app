import Counter from "./Counter";
function CounterGroup(props){
    return(
        <>
        {Array.from(
            {length: props.size}
        ).map(()=><Counter></Counter>)}
        </>
    )
}

export default CounterGroup;