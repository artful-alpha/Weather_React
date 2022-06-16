import React from "react";
import CONFIG from "../../../config";
import ContextWeather from "../../ContextWeather";
import Forecast from "../../Tabs/Forecast";

export default function SearchForm() {
  const [value, setInput] = React.useState("");
  const globalContext = React.useContext(ContextWeather);

  const { cityName, setCityName, forecast, setForecast } = globalContext;

  const URL = `${CONFIG.API_URL}${CONFIG.WEATHER}?q=${value}&appid=${CONFIG.API_KEY}`;
  const URL_FORECAST = `${CONFIG.API_URL}${CONFIG.FORECAST}?q=${value}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&cnt=${CONFIG.NUMBER_FORECASTS}`;

  const sendForm = (ev) => {
    ev.preventDefault();

    if (!value) return;

    setInput(value);
    setInput("");
    // This request Weather URL
    fetch(URL)
      .then((res) => res.json())
      .then((JSON) => {
        setCityName(JSON);
      });
    // This request Weather FORECAST
    fetch(URL_FORECAST)
      .then((res) => res.json())
      .then((JSON) => {
        setForecast(JSON);
      });
  };

  return (
    <div className=''>
      <form className='box__search' onSubmit={sendForm}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={value}
          className='box__search-input'
          type='search'
          name='search'
          placeholder='Enter name of city'
        />
        <button className='box__search-btn' type='submit'></button>
      </form>
    </div>
  );
}
