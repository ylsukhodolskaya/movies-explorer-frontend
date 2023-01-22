import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <section className='footer__container'>
        <p className='footer__date'>© 2022</p>
        <div className='footer__links'>
          <a href="/" className=' footer__link'>Яндекс.Практикум</a>
          <a href="/" className=' footer__link'>Github</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;