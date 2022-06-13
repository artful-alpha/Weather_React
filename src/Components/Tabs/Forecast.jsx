export default function Forecast() {
  return (
    <div
      //   id='tab_forecast'
      className='box__right-tab-block box__right-tab-block--3'>
      <p className='box__block-title'>Aktobe</p>
      <div className='forecast-list'>
        <div className='forecast-item'>
          <div className='forecast-date-box'>
            <p className='forecast-date'>17 May</p>
            <p className='forecast-time'>12:00</p>
          </div>
          <div className='forecast-temperature-box'>
            <p className='forecast-temperature'>
              Temperature: <span className='circle-icon'>13</span>
            </p>
            <p className='forecast-weather'>Rain</p>
          </div>
          <div className='forecast-like-box'>
            <p className='forecast-feels'>
              Feels like: <span className='circle-icon'>10</span>
            </p>
            <img
              className='forecast-weather-icon'
              src='./img/icons8-rain-96 1.svg'
              alt=''
            />
          </div>
        </div>
        <div className='forecast-item'>
          <div className='forecast-date-box'>
            <p className='forecast-date'>17 May</p>
            <p className='forecast-time'>15:00</p>
          </div>
          <div className='forecast-temperature-box'>
            <p className='forecast-temperature'>
              Temperature: <span className='circle-icon'>13</span>
            </p>
            <p className='forecast-weather'>Rain</p>
          </div>
          <div className='forecast-like-box'>
            <p className='forecast-feels'>
              Feels like: <span className='circle-icon'>10</span>
            </p>
            <img
              className='forecast-weather-icon'
              src='./img/icons8-rain-96 1.svg'
              alt=''
            />
          </div>
        </div>
        <div className='forecast-item'>
          <div className='forecast-date-box'>
            <p className='forecast-date'>17 May</p>
            <p className='forecast-time'>18:00</p>
          </div>
          <div className='forecast-temperature-box'>
            <p className='forecast-temperature'>
              Temperature: <span className='circle-icon'>13</span>
            </p>
            <p className='forecast-weather'>Rain</p>
          </div>
          <div className='forecast-like-box'>
            <p className='forecast-feels'>
              Feels like: <span className='circle-icon'>10</span>
            </p>
            <img
              className='forecast-weather-icon'
              src='./img/icons8-rain-96 1.svg'
              alt=''
            />
          </div>
        </div>
        <div className='forecast-item'>
          <div className='forecast-date-box'>
            <p className='forecast-date'>17 May</p>
            <p className='forecast-time'>21:00</p>
          </div>
          <div className='forecast-temperature-box'>
            <p className='forecast-temperature'>
              Temperature: <span className='circle-icon'>13</span>
            </p>
            <p className='forecast-weather'>Rain</p>
          </div>
          <div className='forecast-like-box'>
            <p className='forecast-feels'>
              Feels like: <span className='circle-icon'>10</span>
            </p>
            <img
              className='forecast-weather-icon'
              src='./img/icons8-rain-96 1.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
