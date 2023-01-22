import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <article className='about-project'>
      <h2 className='headers' id="about-project">О проекте</h2>
      <section className='about-project__columns'>
        <div className='about-project__column'>
          <h2 className='about-project__column-header'>Дипломный проект включал 5 этапов</h2>
          <p className='about-project__column-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__column'>
          <h2 className='about-project__column-header'>На выполнение диплома ушло 5 недель</h2>
          <p className='about-project__column-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </section>
      <section className='project-progress'>
        <div className='project-progress__column project-progress__column_small'>
          <div className='project-progress__indicator project-progress__indicator_green'>
            <span className='project-progress__indicator-span project-progress__indicator-span_black'>1 неделя</span>
          </div>
          <p className='project-progress__text'>Back-end</p>
        </div>
        <div className='project-progress__column'>
          <div className='project-progress__indicator'>
            <span className='project-progress__indicator-span'>4 недели</span>
          </div>
          <p className='project-progress__text'>Front-end</p>
        </div>
      </section>
    </article>
  )
}

export default AboutProject;