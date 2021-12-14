import CounterGroup from "./CounterGroup";
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter(){
    return(
        <>
        <CounterSizeGenerator/>
        <CounterGroupSum/>
        <CounterGroup/>
        </>
    );
}

export default MultiCounter;