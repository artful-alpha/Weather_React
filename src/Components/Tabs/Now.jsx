import CONFIG from "../../config";
export default function Now({ info }) {
  const tempCelsius = Math.floor(info.main.temp - 273.15);
  const img = CONFIG.IMG + info.weather[0].icon + "@2x.png";
  const cloud = info.weather[0].main;
  const { name } = info;

  return (
    <div
      // id='tab_now'
      className='box__right-tab-block box__right-tab-block--1'>
      <div className='box__block-content--top'>
        <span className='box__right-temperature circle-icon'>
          {tempCelsius}
        </span>
      </div>
      <div className='box__block-content--middle'>
        <img className='now__weather-icon' src={img} alt={cloud} />
      </div>
      <div className='box__block-content--bottom'>
        <p className='box__block-title'>{name}</p>
        <button className='box__bottom-btn' type='button'>
          Like
        </button>
      </div>
    </div>
  );
}
