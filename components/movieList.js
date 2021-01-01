import React from "react";
import Link from 'next/link';


export default class MovieList extends React.Component {


    shorten = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substr(0, maxLength) + '...'
        } return text
    }

    renderMovies(movies) {

        return movies.map(movie => (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <Link href={"movies/[id]"} as={`/movies/${movie.id}`}>
                        <a ><img className="card-img-top" src={movie.image} alt="" /></a>
                    </Link>

                    <div className="card-body">
                        <h4 className="card-title">
                            <Link href={"movies/[id]"} as={`/movies/${movie.id}`}>
                                <a >{movie.name}</a>
                            </Link>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{this.shorten(movie.description, 110)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating}</small>
                    </div>
                </div>
            </div>
        )
        );
    }

    render() {
        const { movies } = this.props;

        return (
            // You can also use empty tags like this <> </> instead of react.fragment
            <React.Fragment>
                { this.renderMovies(movies)}
            </React.Fragment>
        )
    }

}