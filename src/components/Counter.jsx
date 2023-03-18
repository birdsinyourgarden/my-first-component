import React, {useState} from 'react'
import '../styles/Button.css'

function Counter(props) {

const [number, setNumber] = useState(0);

// number es el valor de mi estado
// setNumber lo que hace es que cambie
// useState(el valor inicial)

const counter = () => {
    setNumber ( number + 1);
}
    return (
        <>
            <button className={`basic-btn ${props.clase}`} onClick={counter}>{props.text} {number}</button>
        </>
    )
}

export default Counter;

Counter.defaultProps = {
    text: '🤍'
}
