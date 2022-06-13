import React from "react";
import SearchForm from "./Search-Form/SearchForm";
import CONFIG from "../../config";
import TabsContent from "../Tabs/TabsContent";
import TabsSelect from "../Tabs/TabsSelect";
import FakeResponce from "../FakeResponse";
const TABS = {
  Now: "Now",
  Details: "Details",
  Forecast: "Forecast",
};

export default function Container() {
  const [tabsActive, setTabs] = React.useState(TABS.Now);
  const [response, setResponse] = React.useState(FakeResponce);

  const requestWeather = (cityName) => {
    fetch(
      `${CONFIG.API_URL}${CONFIG.WEATHER}?q=${cityName}&appid=${CONFIG.API_KEY}`
    )
      .then((res) => res.json())
      .then((JSON) => setResponse(JSON));
  };
  const changeTab = (event) => {
    const tabsName = event.target.innerHTML;
    setTabs(TABS[tabsName]);
  };
  return (
    <div className='box'>
      <SearchForm onSubmit={requestWeather} />
      <div className='box__content'>
        <div className='box__content-left'>
          <TabsContent selectTab={tabsActive} info={response} />
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
