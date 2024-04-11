import {useState,useEffect} from 'react'
import axios from 'axios'

function Forecast({lat,lon}) {
    const apiKey = '4f1c31ac1f3a42218a16c5af9abd8ec9';
    const [forecast,setData] = useState('')
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    // api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}

    useEffect(() => {
        axios.get(forecastURL)
        .then((response) => {
          setData(response.data)
          console.log("Forecast: ",response);
        });
    },[forecastURL])
    
  return (
    <>
    {forecast ? (
        <div>
                <div>Forecast</div>
                <ul>
                    {forecast.list.map((item,idx) => (
                        <li key={idx}>{item.dt_txt} / {item.main.temp} / Min: {item.main.temp_min.toFixed()} / Max: {item.main.temp_max.toFixed()}</li>
                    )
                )}
                </ul>
        </div>
    ):
    <p>No Forecast</p>}

    </>

  )
}

export default Forecast