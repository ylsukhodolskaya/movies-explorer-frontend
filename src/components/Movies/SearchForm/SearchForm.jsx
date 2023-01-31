import { useEffect, useState, useRef } from "react";
import './SearchForm.css';

function SearchForm(props) {
  const { filterCards, page, required = true } = props;

  const [error, setError] = useState({ name: '', durationMovieShort: '' });
  // Переменная состония поля input поиска
  const [value, setValue] = useState({ name: '', durationMovieShort: false });
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const formRef = useRef(null);

  // Эффект отслеживания состояния поля input поиска 
  useEffect(() => {
    const searchMovies = JSON.parse(localStorage.getItem('search-movies'));
    if (searchMovies) {
      setValue(searchMovies);
      filterCards(searchMovies);
    }
    if (page === 'saved-movies') {
      filterCards(value);
      setValue({ name: '', durationMovieShort: false });
    }
  }, [])

  const handleChange = (e) => {
    const { name, value: inputValue, validationMessage } = e.target;

    const updatedValue = { ...value, [name]: inputValue }
    if (page === 'movies') {
      localStorage.setItem('search-movies', JSON.stringify(updatedValue));
    }
    setValue(updatedValue);
    setError((state) => ({ ...state, [name]: validationMessage }));
    setIsDisabledButton(!formRef.current.checkValidity())
  };

  // Функция отработки чекбокса
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    const updatedValue = { ...value, [name]: checked };

    localStorage.setItem('search-movies', JSON.stringify(updatedValue));
    setValue(updatedValue);
    filterCards(updatedValue);
  }

  // Функция отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    filterCards(value);
  }

  return (
    <article className='search-film' aria-label="search-film">
      <form 
      action="/" 
      className='search-film__form' 
      onSubmit={handleSubmit}
      ref={formRef}
      noValidate
      >
        <fieldset className='search-film__container'>
          <input 
          type="text" 
          className='search-film__input' 
          placeholder='Фильм' 
          required={required}
          onChange={handleChange}
          value={value.name}
          name="name"
          />
          <button 
          className='search-film__button'
          disabled={isDisabledButton}
          onClick={handleSubmit}
          >
          </button>
        </fieldset>
        <span className="search-film__error">{error.name}</span>

        <fieldset className='search-film__filter'>

          <input 
          type="checkbox" 
          className='search-film__checkbox' 
          id="shortfilm" 
          onChange={handleCheckbox} 
          name='durationMovieShort'  
          checked={value.durationMovieShort} 
          />
          <label htmlFor="shortfilm" className='search-film__checkbox-container'></label>
          <label htmlFor="shortfilm" className='search-film__checkbox-label' >Короткометражка</label>
        </fieldset>
      </form>
    </article>
  )
}

export default SearchForm;