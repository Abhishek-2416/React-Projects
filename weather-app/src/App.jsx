import React, { useState } from "react"
import axios from "axios"

function App() {
  const [data , setData] = useState({})
  const [location , setLocation] = useState();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2b60b4b767654a23a6985318a20838e6`

  //This is for the search feature
  const searchLocation = (event) => {
    if(event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  }

  function handleLocation(event){
    setLocation(event.target.value)
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={handleLocation}
        onKeyPress={searchLocation}
        placeHolder="Enter location"
        type="text"
        >
        
        </input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>
              {data.main ? <h1>{data.main.temp}°F</h1> : null} F
            </h1>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
            <p className="bold">Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}</p> : null}
          <p className="bold">Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
          <p className="bold"> Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
