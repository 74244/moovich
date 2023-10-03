import React from "react"

import HeroSlider from "../components/hero-slider/HeroSlider"
import { Link } from "react-router-dom"
import { OutlineButton } from "../components/button/Button"

import MovieList from "../components/movie-list/MovieList"

import { category, premieresType, topType } from "../api/kpApi"

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>250 Лучших фильмов</h2>
            <Link to='/top'>
              <OutlineButton>Посмотреть больше</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.premieres} type={topType.TOP_250_BEST_FILMS}/>
        </div>
        {/* <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>100 Популярных фильмов</h2>
            <Link to='/premieres'>
              <OutlineButton>Посмотреть больше</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.top} type={topType.TOP_100_POPULAR_FILMS}/>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Топ ожидаемых фильмов</h2>
            <Link to='/premieres'>
              <OutlineButton>Посмотреть больше</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.top} type={topType.TOP_AWAIT_FILMS}/>
        </div> */}
        {/* <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Премьеры</h2>
            <Link to='/premieres'>
              <OutlineButton>Посмотреть больше</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.premieres} year={2023} month={premieresType.JANUARY}/>
        </div> */}
      </div>
    </>
  )
}
export default Home