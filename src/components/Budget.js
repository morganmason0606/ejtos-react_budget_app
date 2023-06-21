import React, {useContext} from "react"
import {AppContext} from "../context/AppContext"

const Budget = () =>{

    const {budget, dispatch, remaining, currency} = useContext(AppContext);
    //const [bud, setBud] = useState(budget);

    const changeBudget= (event) => {
        //console.log(event);
        let bud = event.target.value;
        if(bud < budget - remaining){
            alert("You cannot reduce budget value lower than spending")
            bud = 0
            return;
        }
        if(bud > 20000){
            alert("You cannot set budget greater than 20,000");
            bud = 0
            return;
        }
        dispatch({
            type: "SET_BUDGET",
            payload:bud,
        });

    }
    

    return(
        <div className="alert alert-secondary">
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    step = "10"
                    id='cost'
                    value ={budget}
                    onChange={(event)=>{changeBudget(event)}}
                    >
                </input>
            </span>
        </div>
    );
}

export default Budget;
