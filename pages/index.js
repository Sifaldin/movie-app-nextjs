import React from "react";
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import SideMenu from '../components/sideMenu';
import { getCategories, getMovies } from "../actions";
import MOVIE_DATA from "../resources/movie_data";


export default function Home(props) {
  const { images } = props
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu appName={"Movie DB"} categories={props.categories} />
          </div>

          <div className="col-lg-9">
            <Carousel images={images || []} />

            <div className="row">

              <MovieList movies={props.movies} />
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

