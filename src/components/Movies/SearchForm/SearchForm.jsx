import React from "react";
import './SearchForm.css';

function SearchForm() {
  return (
    <article className='search-film' aria-label="search-film">
      <form action="/" className='search-film__form' >
        <fieldset className='search-film__container' tabindex="0">
          <input type="text" className='search-film__input' placeholder='Фильм' required/>
          <button className='search-film__button'>
          </button>
        </fieldset>
        <fieldset className='search-film__filter'>
          <input type="checkbox" className='search-film__checkbox' id="shortfilm" />
          <label htmlFor="shortfilm" className='search-film__checkbox-container'></label>
          <label htmlFor="shortfilm" className='search-film__checkbox-label' >Короткометражка</label>
        </fieldset>
      </form>
    </article>
  )
}

export default SearchForm;