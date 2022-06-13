export default function TabsSelect({ changeTab, tabs }) {
  return (
    <div className='box__right-tabs' onClick={changeTab}>
      {Object.keys(tabs).map((item) => {
        return <p className='box__right-tab'>{item}</p>;
      })}
    </div>
  );
}
