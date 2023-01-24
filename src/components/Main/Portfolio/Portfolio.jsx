import React from "react";
import './Portfolio.css';

function Portfolio () {
  return (
    <section className='portfolio' aria-label="portfolio">
    <h3 className='portfolio__title'>Портфолио</h3>
    <ul className='portfolio__list'>
      <li className='portfolio__item'>
        <a 
        href="https://github.com/ylsukhodolskaya/how-to-learn" 
        className='portfolio__link'
        target="_blank"
        rel="noopener noreferrer"
        >Статичный сайт</a>
      </li>
      <li className='portfolio__item'>
        <a 
        href="https://github.com/ylsukhodolskaya/russian-travel" 
        className='portfolio__link'
        target="_blank"
        rel="noopener noreferrer"
        >Адаптивный сайт</a>
      </li>
      <li className='portfolio__item'>
        <a 
        href="https://github.com/ylsukhodolskaya/mesto" 
        className='portfolio__link'
        target="_blank"
        rel="noopener noreferrer"
        >Одностраничное приложение</a>
      </li>
    </ul>
  </section>
  )
}

export default Portfolio;