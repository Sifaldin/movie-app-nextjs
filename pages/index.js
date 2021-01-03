import React, { useState } from "react";
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import SideMenu from '../components/sideMenu';
import { getCategories, getMovies } from "../actions";
import MOVIE_DATA from "../resources/movie_data";


export default function Home(props) {
  const { images, categories, movies } = props
  const [filter, setFilter] = useState('all');

  const changeCategory = category => {
        setFilter(category)
  }

  const filterMovies = (movies) => {
    if(filter==='all'){
      return movies
    }
    return movies.filter(m => m.genre.includes(filter));
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu 
            changeCategory = {changeCategory}
            activeCategory={filter}
            appName={"Movie DB"} 
            categories={props.categories} />
          </div>

          <div className="col-lg-9">
            <Carousel images={images || []} />
            <h1>Displaying {filter} movies</h1>

            <div className="row">

              <MovieList movies={filterMovies(movies)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((m) => {
    return {
      id: `image-${m.id}`,
      url: m.cover,
      name: m.name
    }
  })
  return { movies, images, categories };
}

