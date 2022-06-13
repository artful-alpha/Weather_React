import React from "react";

export default function SearchForm({ onSubmit }) {
  const [searchInput, setSearch] = React.useState("");

  const sendForm = (e) => {
    e.preventDefault();
    const cityName = e.target[0].value;

    if (!cityName) return;

    onSubmit(cityName);
    setSearch("");
  };

  return (
    <div className=''>
      <form className='box__search' onSubmit={sendForm}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={searchInput}
          className='box__search-input'
          type='search'
          name='search'
          placeholder='Enter name of city'
        />
        <button className='box__search-btn' type='submit'></button>
      </form>
    </div>
  );
}
