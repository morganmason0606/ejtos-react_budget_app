import React, {useContext} from 'react'
import {AppContext} from "../context/AppContext"

const Currency = () =>{
    const {dispatch} = useContext(AppContext);

    const changeCurr = (val) =>{
        dispatch({
            type:"CHG_CURRENCY",
            payload:val,
        })
    };
    return(
<div className="alert alert-success">
    Currency <select name="Location" id="Location" 
        onChange={event=>changeCurr(event.target.value)}>
        
        <option value="$">($) Dollar</option>
        <option value="£">(£) Pound</option>
        <option value="€">(€) Euro</option>
        <option value="₹">(₹) Ruppee</option>
        
    </select>	
</div>
    );

};

export default Currency;