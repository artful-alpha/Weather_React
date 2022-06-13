import Now from "./Now";
import Details from "./Details";
import Forecast from "./Forecast";
export default function TabsContent({ selectTab, info }) {
  const renderTab =
    selectTab === "Now" ? (
      <Now info={info} />
    ) : selectTab === "Details" ? (
      <Details />
    ) : (
      <Forecast />
    );

  return <div className='box__right-tab-content'>{renderTab}</div>;
}
