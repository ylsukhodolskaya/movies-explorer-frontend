import React from "react";
import './Promo.css'

function Promo() {
  return (
    <article className='promo' aria-label="promo">
      <section className='promo__container' aria-label="promo">
        <h2 className='promo__header'>Учебный проект студента факультета Веб-разработки</h2>
        <div className='promo__links'>
          <a href="#about-project" className='promo__link'>О проекте</a>
          <a href="#tech" className='promo__link'>Технологии</a>
          <a href="#about-me" className='promo__link'>Студент</a>
        </div>
      </section>
    </article>
  )
}

export default Promo;