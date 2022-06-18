import Now from "./Now";
import Details from "./Details";
import Forecast from "./Forecast";
export default function TabsContent({ selectTab, cityName }) {
  const renderTab = !cityName ? (
    false
  ) : selectTab === "Now" ? (
    <Now />
  ) : selectTab === "Details" ? (
    <Details />
  ) : (
    <Forecast />
  );

  return <div className='box__right-tab-content'>{renderTab}</div>;
}
