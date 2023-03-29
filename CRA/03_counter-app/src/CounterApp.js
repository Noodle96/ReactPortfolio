//rafcp
import {useState} from 'react'
import { Fragment  } from "react";
import PropTypes from 'prop-types'


//FUNCTIONAL COMPONENT

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);


    //handleAdd
    const handleAdd = () => {
        //setCounter(counter+1);
        setCounter((c) => c+1);
    }
    const handleReset = ()=>{
        setCounter(value);
    }
    const handleSubstract = () =>{
        setCounter(counter-1);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2 id='counterInicial'> {counter} </h2>
            <button onClick={ (e) => {handleAdd(e)}}> +1 </button>
            <button onClick={ (e) => {handleReset(e)}}> Reset </button>
            <button onClick={ (e) => {handleSubstract(e)}}> -1 </button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 625
}

export default CounterApp;