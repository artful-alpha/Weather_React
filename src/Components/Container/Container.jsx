import React from "react";
import SearchForm from "./Search-Form/SearchForm";
import CONFIG from "../../config";
import TabsContent from "../Tabs/TabsContent";
import TabsSelect from "../Tabs/TabsSelect";
const TABS = {
  Now: "Now",
  Details: "Details",
  Forecast: "Forecast",
};

export default function Container() {
  const [tabsActive, setTabs] = React.useState(TABS.Now);
  const requestWeather = (cityName) => {
    fetch(
      `${CONFIG.API_URL}${CONFIG.WEATHER}?q=${cityName}&appid=${CONFIG.API_KEY}`
    )
      .then((res) => res.json())
      .then((otvet) => console.log(otvet));
  };
  const changeTab = (event) => {
    const tabsName = event.target.innerHTML;
    console.log(tabsName);
    setTabs(TABS[tabsName]);
  };
  return (
    <div className='box'>
      <SearchForm onSubmit={requestWeather} />
      <div className='box__content'>
        <div className='box__content-left'>
          <TabsContent selectTab={tabsActive} />
          <TabsSelect changeTab={changeTab} tabs={TABS} />
        </div>
        <div className='box__content-right'>
          <div className='box__right-title'>Added Locations:</div>
          <ul className='box__right-list'></ul>
        </div>
      </div>
    </div>
  );
}
