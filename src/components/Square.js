import React,{useState} from "react";
function Square (props)  {
    const [value ,setValue]=useState(null);
    function toggleText ()  {
        if (value===null){
            setValue(props.currentState)
            props.changeTurn(props.id)

        }

    }
    return <button className="square" onClick={toggleText}>
        {value}
    </button>
}
export default Square