import React, { useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${}&APPID=${}`

  const searchLocation = () => {
    axios.get(url.then((response) => {
      setData(response.data)
      console.log(response.data)
    }))
  }



  return (
    <div className="App">
      <h2> Weather App</h2>

      <div className='location'> </div>
        <h1>London</h1>
      <div className='Temperature'> </div>
         <h1>60</h1>
      <div className='Description'> </div>
        <h1>Windy</h1>



    </div>
  );
}

export default App;
