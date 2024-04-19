import React, {useState} from 'react'
import axios from 'axios';
import CityList from '../components/CityList';

function locations() {
    const apiKey = '4f1c31ac1f3a42218a16c5af9abd8ec9';
    const [cityData, setData] = useState({})
    const [location, setLocation] = useState("")
    const [currentDate, setCurrentDate] = useState(getDate())

    // const cityWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
    const cityWeatherURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=10&appid=${apiKey}`;

    const searchLocation = (event) => {
      if(event.key === "Enter") {
        axios.get(cityWeatherURL)
          .then((response) => {
            setData(response.data)
            console.log(response);
          })
          setLocation("")
      }
    }

    function getDate() {
        const today = new Date()
        const weekday = today.toLocaleDateString('default', {weekday: 'long'})
        const month = today.toLocaleDateString('default', {month: 'long'})
        const year = today.getFullYear();
        const date = today.getDate()
        return `${weekday} ${month} ${date}, ${year}`
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center">Search For Weather</h1>

            <div className="py-8 items-center max-w-sm md:max-w-lg mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" placeholder="Enter City" className="grow w-1/2" 
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyDownCapture={searchLocation}
                />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
                </label>
            </div>
        
        
            <div className="prose text-3xl font-semibold mx-auto text-center pb-4">{currentDate}</div>
            { cityData.length > 0 ? (
              <CityList cityData={cityData}/>
            ):null}
        </div>
  )
}

export default locations