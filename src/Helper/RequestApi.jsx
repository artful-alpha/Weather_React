import CONFIG from "../config";
import React from "react";
import ContextWeather from "../Components/ContextWeather";

export default function RequestApi(cityName, destination) {
  const { setResponse } = React.useContext(ContextWeather);
  fetch(`${CONFIG.API_URL}${destination}?q=${cityName}&appid=${CONFIG.API_KEY}`)
    .then((res) => res.json())
    .then((JSON) => setResponse(JSON));
  return <div></div>;
}
