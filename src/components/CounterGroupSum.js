import { useSelector } from 'react-redux';
function CounterGroupSum() {
    return(
        <>
            Sum: {useSelector(state => state.sum)}
        </>
    );
}
export default CounterGroupSum;