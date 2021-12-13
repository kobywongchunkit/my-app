import Counter from "./Counter";
function CounterGroup(props){
    return(
        // <>  
        //     {/* <span>{props.size}</span> */}
        //     {[...Array(props.size)].map(() => <Counter></Counter>)}
        // </>
        Array.from(
            {length: props.size},
            () => <Counter></Counter>
        )
    )
}

export default CounterGroup;