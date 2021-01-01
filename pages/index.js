import React from "react";
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import SideMenu from '../components/sideMenu';
import { getMovies } from "../actions";
import MOVIE_DATA from "../resources/movie_data";


export default function Home(props) {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu appName={"Movie DB"} />
            </div>

            <div className="col-lg-9">
              <Carousel />

              <div className="row">

                <MovieList movies={props.movies || [] } />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  return { movies };
}
