import { useState } from "react";
import axios from "axios";
import Weather from "../components/Weather"
import { MdLocationOn } from "react-icons/md";

function Home() {
    const apiKey = '4f1c31ac1f3a42218a16c5af9abd8ec9';
    const [data, setData] = useState({})
    const [currentDate, setCurrentDate] = useState(getDate())
    const [location, setLocation] = useState("")
   

    const cityWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

    const searchLocation = (event) => {
      if(event.key === "Enter") {
        axios.get(cityWeatherURL)
          .then((response) => {
            setData(response.data)
            // console.log(response);
          })
          setLocation("")
      }
    }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation not supported in your browser")
    }
    // alert("Hello")
  }

  function showPosition(position) {
    alert("show")
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    alert(lat)
    alert(lng)
  }

  function getDate() {
    const today = new Date()
    const weekday = today.toLocaleDateString('default', {weekday: 'long'})
    const month = today.toLocaleDateString('default', {month: 'long'})
    const year = today.getFullYear();
    const date = today.getDate()
    // console.log("Date: ",month)
    return `${weekday} ${month} ${date}, ${year}`
  }
    
  return (

    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Hello Weather</h1>

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
        <button className="btn bg-slate-100" onClick={getCurrentLocation}><MdLocationOn/> Use Current Location</button>
      </div>
      
      
      <div className="prose text-3xl font-semibold mx-auto text-center pb-4">{currentDate}</div>
      <Weather weatherData={data} />
     </div>


  )
}

export default Home