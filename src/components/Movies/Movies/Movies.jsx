import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Movies () {
  return (
    <>
    <SearchForm />
    <MoviesCardList />
    </>
  )
}

export default Movies;