import React, {useState, useEffect} from "react";
import axios from "axios";

function Home() {
    const apiKey = '4f1c31ac1f3a42218a16c5af9abd8ec9';
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    // const [weather, setWeather] = useState([])

    const axiosCreate=axios.create({
        baseURL:'https://api.openweathermap.org/data/2.5'
    })
    
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // const getGameListByGenreID=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
        const getWeather=axiosCreate.get('/weather?lat='+position.latitude+'&lon='+position.longitude+'&appid='+apiKey)
        console.log("Weather:", getWeather)
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);

  return (
    <div>
        <h1 className="text-3xl font-bold">My Location</h1>
        {position.latitude && position.longitude ? (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      ) : (
        <span className="loading loading-infinity loading-lg"></span>
      )}
    </div>
  )
}

export default Home