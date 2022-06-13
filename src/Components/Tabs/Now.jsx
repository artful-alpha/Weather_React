export default function Now() {
  return (
    <div
      // id='tab_now'
      className='box__right-tab-block box__right-tab-block--1'>
      <div className='box__block-content--top'>
        <span className='box__right-temperature circle-icon'>14</span>
      </div>
      <div className='box__block-content--middle'>
        <img
          className='now__weather-icon'
          src='./img/icons8-cloud-96 1.svg'
          alt='cloud'
        />
      </div>
      <div className='box__block-content--bottom'>
        <p className='box__block-title'>Aktobe</p>
        <button className='box__bottom-btn' type='button'>
          Like
        </button>
      </div>
    </div>
  );
}
