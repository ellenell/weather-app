import React, { useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${}&APPID=${}`

  const searchLocation = (event) => {
    axios.get(url.then((response) => {
      setData(response.data)
      console.log(response.data)
    }))
    setLocation('')
  }



  return (
    <div className="App">
      <h2> Weather App</h2>
      <div className='search' ></div>
        <input value = {location}
        onChange = {event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}
        type="text"/>


      <div className='location'> </div>
        <h1>{data.name}</h1>
      <div className='Temperature'> </div>
         <h1>{data.main.temp}</h1>
      <div className='Description'> </div>
        <h1>{data.weather.main}</h1>



    </div>
  );
}

export default App;
