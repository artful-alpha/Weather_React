import React from "react";
import ContextWeather from "../ContextWeather";
import { dayWeather } from "../../Helper/dayWeather";
import ForecastItem from "./ForecastItem";
import iconWeather from "../../Helper/iconWeather";
import { timeWeather } from "../../Helper/timeWeather";
export default function Forecast() {
  const globalContext = React.useContext(ContextWeather);
  const { forecast } = globalContext;

  const ForecastList = forecast.list.map((item) => (
    <ForecastItem
      key={item.dt}
      forecastDate={dayWeather(item.dt_txt)}
      forecastTime={timeWeather(item.dt)}
      forecastDescription={item.weather[0].description}
      temp={item.main.temp}
      forecastFeels={item.main.feels_like}
      weatherIcon={iconWeather(item.weather[0].icon)}
    />
  ));

  return (
    <div
      //   id='tab_forecast'
      className='box__right-tab-block box__right-tab-block--3'>
      <p className='box__block-title'>{forecast.city.name}</p>
      <div className='forecast-list'>{ForecastList}</div>
    </div>
  );
}
