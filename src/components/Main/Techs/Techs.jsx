import React from "react";
import './Techs.css';

function Techs() {
  return (
    <article className='tech'>
      <h2 className='headers' id="tech">Технологии</h2>
      <section className='tech__container promo__container'>
        <h3 className='tech__header'>7 технологий</h3>
        <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='tech__list'>
          <li className='tech__list-item'>HTML</li>
          <li className='tech__list-item'>CSS</li>
          <li className='tech__list-item'>JS</li>
          <li className='tech__list-item'>React</li>
          <li className='tech__list-item'>Git</li>
          <li className='tech__list-item'>Express.js</li>
          <li className='tech__list-item'>mongoDB</li>
        </ul>
      </section>
    </article>
  )
}

export default Techs;