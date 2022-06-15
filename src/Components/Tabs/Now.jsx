import React from "react";
import ContextWeather from "../ContextWeather";
import convertTemp from "../../Helper/convertTemp";
import iconWeather from "../../Helper/iconWeather";
export default function Now() {
  const globalContext = React.useContext(ContextWeather);
  const { cityName, setListFavorite } = globalContext;
  const temp = convertTemp(cityName.main.temp);
  const icon_url = iconWeather(cityName.weather[0].icon);
  const { name } = cityName;

  const clickFavorite = () => {
    setListFavorite((old_list) => [...old_list, name]);
  };
  return (
    <div
      // id='tab_now'
      className='box__right-tab-block box__right-tab-block--1'>
      <div className='box__block-content--top'>
        <span className='box__right-temperature circle-icon'>{temp}</span>
      </div>
      <div className='box__block-content--middle'>
        <img className='now__weather-icon' src={icon_url} alt='cloud' />
      </div>
      <div className='box__block-content--bottom'>
        <p className='box__block-title'>{name}</p>
        <button
          onClick={clickFavorite}
          className='box__bottom-btn'
          type='button'>
          Like
        </button>
      </div>
    </div>
  );
}
