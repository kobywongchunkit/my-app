import { useDispatch } from 'react-redux';
import{ UPDATE_SIZE, RESET_SUM }  from '../constants/constants';

function CounterSizeGenerator(props){
    const dispatch = useDispatch();
    
    function handleChangeSize(event){
        const size = parseInt(event.target.value)
        dispatch({type:UPDATE_SIZE,payload: size});
        dispatch({type:RESET_SUM});
    }

    return(
        <div>
            <span>Size: </span>
            <input type="number" min="0" onChange={handleChangeSize}></input>
        </div>
    );
}
export default CounterSizeGenerator; 