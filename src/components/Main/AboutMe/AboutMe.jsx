import React from "react";
import './AboutMe.css';

function AboutMe() {
  return (
    <article className='about-me'>
      <h2 className='headers' id="about-me">Студент</h2>
      <section className='about-me__container'>
        <div className='about-me__about'>
          <h3 className='about-me__name'>Юля</h3>
          <p className='about-me__description'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolores laborum eveniet voluptates corrupti dolor labore recusandae illo consequatur blanditiis. Similique optio dolorum tempora ab aspernatur incidunt veritatis illum suscipit!</p>
          <a href="/" className='about-me__link link'>Github</a>
        </div>
        <img src="https://img.gazeta.ru/files3/34/14989034/59051691-10915089-image-m-34_165-pic_32ratio_900x600-900x600-67347.jpg" alt="" className='about-me__photo' />
      </section>
    </article>
  )
}

export default AboutMe;