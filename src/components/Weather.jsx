
import Forecast from '../components/Forecast'
import { WiSunrise, WiSunset,WiDirectionUp,WiDirectionDown } from "react-icons/wi";

function formatDate(inDate) {

    const date = new Date(inDate * 1000);
    // var hours = date.getHours();
    // var mins = date.getMinutes()
    // var seconds = date.getSeconds()
    // var formattedDate = hours + ":" + mins + ":" + seconds
    // var formattedDate = date
    var timeString = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    })
    return timeString
}
function Weather({weatherData}) {

  return (
    <div className='mx-auto'>
    {weatherData.weather ? (
        <div>
            <div className='prose lg:prose-xl pb-5'>
                <div className='px-8'>
                    <h4>{weatherData.name}, {weatherData.sys.country}</h4>
                </div>
                <div className='flex justify-between px-8'>
                    <div className='text-4xl font-bold'>{weatherData.main.temp.toFixed()}&#176; F</div>
                    <div>{weatherData.weather[0].main}</div>
                </div>
                <div className='flex justify-between items-center w-1/2 mx-auto'>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt=""/>
                    <p className='uppercase'>{weatherData.weather[0].description}</p>
                </div>

                <div className='flex justify-between max-w-sm mx-auto mb-3'>
                    <div className='flex items-center gap-1'>
                        <WiSunrise className='text-3xl font-bold'/> {formatDate(weatherData.sys.sunrise)}
                    </div>
                    <div className='flex items-center gap-1'>
                        <WiSunset className='font-bold text-3xl'/> {formatDate(weatherData.sys.sunset)}
                    </div>
                    <div className='flex items-center'>
                        <WiDirectionUp className='font-bold text-3xl'/> {weatherData.main.temp_max.toFixed()}&#176;
                    </div>
                    <div className='flex items-center'>
                        <WiDirectionDown className='font-bold text-3xl'/> {weatherData.main.temp_min.toFixed()}&#176;
                    </div>
                </div>

                <div className='flex rounded-md bg-gradient-to-l from-slate-100 justify-between max-w-sm mx-auto'>
                    <div className='text-center p-5'>
                        <p className='font-bold text-2xl'>{weatherData.main.feels_like.toFixed()} &#176;</p>
                        <p>Feels like</p>
                    </div>
                    <div className='text-center p-5'>
                        <p className='font-bold text-2xl'>{weatherData.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                    <div className='text-center p-5'>
                        <p className='font-bold text-2xl'>{weatherData.wind.speed.toFixed()} MPH</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>

    ): null}

    {weatherData.coord ? (
        <Forecast lat={weatherData.coord.lat} lon={weatherData.coord.lon}/>
    ): null}
    </div>
    

  )
}

export default Weather