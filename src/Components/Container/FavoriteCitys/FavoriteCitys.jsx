import React from "react";
import ContextWeather from "../../ContextWeather";

export default function FavoriteCitys() {
  const globalContext = React.useContext(ContextWeather);
  const { listFavorite, setListFavorite } = globalContext;

  const removeFavorite = (event) => {
    const cityName = event.target.previousSibling.textContent;
    setListFavorite((prev) =>
      prev.filter((item) => {
        return item !== cityName;
      })
    );
  };
  const renderFavoriteCitys = listFavorite.map((item) => (
    <li className='item-city' key={item} onClick={removeFavorite}>
      {item}
      <button>X</button>
    </li>
  ));

  return (
    <div className='box__content-right'>
      <div className='box__right-title'>Added Locations:</div>
      <ul className='box__right-list'>{renderFavoriteCitys}</ul>
    </div>
  );
}
