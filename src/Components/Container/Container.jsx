import React from "react";
import SearchForm from "./Search-Form/SearchForm";
import CONFIG from "../../config";
import TabsContent from "../Tabs/TabsContent";
import TabsSelect from "../Tabs/TabsSelect";
import FakeResponce from "../FakeResponse";
import ContextWeather from "../ContextWeather";
import RequestApi from "../../Helper/RequestApi";
import FavoriteCitys from "./FavoriteCitys/FavoriteCitys";

const TABS = {
  Now: "Now",
  Details: "Details",
  Forecast: "Forecast",
};

export default function Container() {
  const [tabsActive, setTabs] = React.useState(TABS.Now);
  const [searchCity, setSearchCity] = React.useState();
  const [cityName, setCityName] = React.useState();
  const [forecast, setForecast] = React.useState("");
  const [listFavorite, setListFavorite] = React.useState(
    JSON.parse(localStorage.getItem("listFavorite")) || []
  );

  const globalContext = {
    tabsActive,
    setTabs,
    searchCity,
    setSearchCity,
    cityName,
    setCityName,
    forecast,
    setForecast,
    listFavorite,
    setListFavorite,
  };

  const requestWeather = (cityName) => {
    RequestApi(cityName, CONFIG.WEATHER);
  };

  const changeTab = (event) => {
    const tabsName = event.target.innerHTML;
    setTabs(TABS[tabsName]);
  };
  return (
    <div className='box'>
      <ContextWeather.Provider value={globalContext}>
        <SearchForm onSubmit={requestWeather} />
        <div className='box__content'>
          <div className='box__content-left'>
            <TabsContent
              selectTab={tabsActive}
              info={searchCity}
              cityName={cityName}
            />
            <TabsSelect changeTab={changeTab} tabs={TABS} />
          </div>
          <FavoriteCitys />
        </div>
      </ContextWeather.Provider>
    </div>
  );
}
