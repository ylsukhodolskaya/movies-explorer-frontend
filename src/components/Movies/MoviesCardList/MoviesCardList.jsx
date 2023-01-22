import React from "react";
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <article className='movies'>
      <ul className='movies__list'>
        <li className='movies__item'>
          <section className='movies__item-container'>
            <div className='movies__item-header'>
              <div className='movies__item-header-info'>
                <h1 className='movies__item-name'>33 слова о дизайне</h1>
                <p className='movies__item-duration'>1ч 47м</p>
              </div>
              <button className='movies__item-bookmark'></button>
            </div>
            <a href="/" className='movies__item-link'>
              <img src="https://kartinkin.net/uploads/posts/2022-12/1670331228_24-kartinkin-net-p-vertikalnie-kartinki-oboi-25.jpg" alt="/" className='movies__item-image' />
            </a>
          </section>
        </li>
        <li className='movies__item'>
          <section className='movies__item-container'>
            <div className='movies__item-header'>
              <div className='movies__item-header-info'>
                <h1 className='movies__item-name'>33 слова о дизайне</h1>
                <p className='movies__item-duration'>1ч 47м</p>
              </div>
              <button className='movies__item-bookmark movies__item-bookmark_active'></button>
            </div>
            <a href="/" className='movies__item-link'>
              <img src="https://gamerwall.pro/uploads/posts/2022-09/1662443371_3-gamerwall-pro-p-finskii-lesnoi-kot-zhivotnie-3.jpg" alt="/" className='movies__item-image' />
            </a>
          </section>
        </li>
        <li className='movies__item'>
          <section className='movies__item-container'>
            <div className='movies__item-header'>
              <div className='movies__item-header-info'>
                <h1 className='movies__item-name'>33 слова о дизайне</h1>
                <p className='movies__item-duration'>1ч 47м</p>
              </div>
              <button className='movies__item-bookmark movies__item-bookmark_delete-from-saved'></button>
            </div>
            <a href="/" className='movies__item-link'>
              <img src="https://angorki.ru/wp-content/uploads/2020/10/russell-scaled.jpg" alt="/" className='movies__item-image' />
            </a>
          </section>
        </li>
      </ul>
    </article>
  )
}

export default MoviesCardList;