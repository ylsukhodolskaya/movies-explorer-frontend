import React from "react";
import SearchForm from "../../Movies/SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";


function SavedMovies () {
  return (
    <>
    <SearchForm />
    <MoviesCardList />
    </>
  )
}

export default SavedMovies;