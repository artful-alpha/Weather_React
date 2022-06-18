import React from "react";
import ContextWeather from "../../ContextWeather";
import CONFIG from "../../../config";
export default function FavoriteCitys() {
  const globalContext = React.useContext(ContextWeather);
  const { setForecast, listFavorite, setCityName, setListFavorite } =
    globalContext;

  const showFavoriteCity = (event) => {
    const cityName = event.target.firstChild.data;
    const URL = `${CONFIG.API_URL}${CONFIG.WEATHER}?q=${cityName}&appid=${CONFIG.API_KEY}`;
    const URL_FORECAST = `${CONFIG.API_URL}${CONFIG.FORECAST}?q=${cityName}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&cnt=${CONFIG.NUMBER_FORECASTS}`;

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
  const removeFavorite = (event) => {
    event.stopPropagation();
    const cityName = event.target.previousSibling.textContent;
    setListFavorite((prev) =>
      prev.filter((item) => {
        return item !== cityName;
      })
    );
  };
  const renderFavoriteCitys = listFavorite.map((item) => (
    <li className='item-city' key={item} onClick={showFavoriteCity}>
      {item}
      <button onClick={removeFavorite}>X</button>
    </li>
  ));

  return (
    <div className='box__content-right'>
      <div className='box__right-title'>Added Locations:</div>
      <ul className='box__right-list'>{renderFavoriteCitys}</ul>
    </div>
  );
}
