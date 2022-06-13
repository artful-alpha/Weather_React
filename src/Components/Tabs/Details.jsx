export default function Details() {
  return (
    <div
      //   id='tab_details'
      className='box__right-tab-block box__right-tab-block--2'>
      <p className='box__block-title'>Aktobe</p>
      <ul className='details-list'>
        <li className='details-item'>
          Temperature: <span className='temp circle-icon'>14</span>
        </li>
        <li className='details-item'>
          Feels like: <span className='feels__like circle-icon'>10</span>
        </li>
        <li className='details-item'>
          Weather: <span className='weather'>Clouds</span>
        </li>
        <li className='details-item'>
          Sunrise: <span className='sunrise'></span>
        </li>
        <li className='details-item'>
          Sunset: <span className='sunset'></span>
        </li>
      </ul>
    </div>
  );
}
