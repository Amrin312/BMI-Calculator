import React from "react";
import { useState } from "react";

export default function Calci(){

    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const [message, setMessage] = useState('');
    let calci = (event) => {
        event.preventDefault()

        if(height == 0 && weight == 0){
    // console.log(height, weight);

            alert('Enter some value!')
        }else{
            let bmi = (weight / (height * height) * 703)
            setMessage(`Your BMI is ${bmi.toFixed(1)}`);     
        }
    }

    let reset = () => {
        window.location.reload()
    }
    // console.log(height, weight);


    return(
        <div id="container">
            <h3>Calculator</h3>
            <form onSubmit={calci}>

                <input type="number" name="height" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} /><br/>
                <input type="number" name="weight" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)}/><br/>
                <input type="submit" value="submit"/><br/>
                <button onClick={reset}>Reset</button><br/>

                {message && <div>{message}</div>}
            </form>
        </div>
    );
}