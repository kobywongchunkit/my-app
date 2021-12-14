import { useSelector } from 'react-redux';
function CounterGroupSum() {
    const sum = useSelector(state => state.sum);
    return(
        <>
            Sum: {sum}
        </>
    );
}
export default CounterGroupSum;