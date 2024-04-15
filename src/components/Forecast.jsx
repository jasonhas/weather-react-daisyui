import {useState,useEffect} from 'react'
import axios from 'axios'

function Forecast({lat,lon}) {
    const apiKey = '4f1c31ac1f3a42218a16c5af9abd8ec9';
    const [forecast,setData] = useState('')
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    // api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
    const date = new Date()
    const year = date.toLocaleString("default", { year: "numeric"})
    const month = date.toLocaleString("default", { month: "2-digit"})
    const day = date.toLocaleString("default", { day: "2-digit"})
    const result = year + '-' + month + "-" + day;

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
                <div>
                  <h3 className='font-bold'>Next 3 Hours</h3>
                  {forecast.list.map((wthr,cnt) =>
                  {
                    const dd = wthr.dt_txt.split(" ")
                    console.log("DX: ",dd[0])
                    if(result === dd[0]) {
                      console.log("Today: ", cnt)
                    }
                  })
                }
                </div>
                <ul>
                    {forecast.list.map((item,idx) => 
                     
                        (
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