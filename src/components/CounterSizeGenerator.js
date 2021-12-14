import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import{UPDATE_SIZE}  from '../constants/constants';

function CounterSizeGenerator(props){
    const[size,setSize] = useState(0);
    const dispatch = useDispatch();
    
    function handleChangeSize(event){
        const size = parseInt(event.target.value)
        setSize(size);
        dispatch({type:UPDATE_SIZE,payload: size});
        // props.updateSize(size);
        props.resetSum();
    }

    return(
        <div>
            <span>Size: </span>
            <input value={size} type="number" min="0" onChange={handleChangeSize}></input>
        </div>
    );
}
export default CounterSizeGenerator; 