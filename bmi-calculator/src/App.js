import React, { useState } from "react";
import './index.css'

function App() {
  const [weight , setWeight] = useState(0);
  const [height , setHeight] = useState(0);
  const [bmi , setBMI] = useState('');
  const [message , setMessage] = useState('');

  let imgSrc;

  let calcBMI = (event) => {
    //prevent submiting
    event.preventDefault()
    if(weight === 0 || height === 0){
      alert("Enter a valid weight and height")
    }else {
      let bmi = (weight) / (height * height)
      setBMI(bmi.toFixed(1))

      //Logic for message
      if(bmi<25){
        setMessage("You are underweight");
        imgSrc = require('./assests/underweight.png');
      }else if (bmi >=25 && bmi < 30){
        setMessage("You are healthy");
        imgSrc = require("./assests/healthy.png");
      }else{
        setMessage("You are overweight");
        imgSrc = require("./assests/overweight.png");
      }
    }
  }

  if(bmi<25){
    imgSrc = require('./assests/underweight.png');
  }else if (bmi >=25 && bmi < 30){
    imgSrc = require("./assests/healthy.png");
  }else{
    imgSrc = require("./assests/overweight.png");
  }

  function handleWeight(event){
    setWeight(event.target.value)
  }

  function handleHeight(event){
    setHeight(event.target.value)
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label>Weight (kgs)</label>
            <input value={weight} onChange={handleWeight}></input>
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={handleHeight}></input>
          </div>
          <div>
            <button className="btn"type="submit">Submit</button>
            {/* <button className="btn btn-outline"type="submit">Submit</button> */}
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is {bmi} </h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
