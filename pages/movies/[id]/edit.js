import React from "react";
import { getMovieById, updateMovie } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";
import Router from 'next/router'


export default class EditMovie extends React.Component {

    /*  static getInitialProps({ query }) {
         return { query }
     } */

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)
        return { movie }
    }

    /*  state = {
         movie: {
             name: '',
             description: '',
             rating: '',
             image: '',
             cover: '',
         }
     }
  */
    /* componentDidMount() {
        const { id } = this.props.query
        getMovieById(id).then(movie => {
            this.setState({ movie })
        })
    } */

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="container">
                <h1>Edit Movie</h1>
                <MovieCreateForm
                    submitButton="Save"
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie} />
            </div>
        )
    }
}