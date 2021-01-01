import { useRouter } from 'next/router';
import { getMovieById } from '../../actions';

const Movie = (props) => {

    const router = useRouter();
    const { id } = router.query;
    const { movie } = props;
    return (
        <div className="container">
            <div class="jumbotron">
                <h1 class="display-4">{movie.name}</h1>
                <p class="lead">{movie.description}</p>
                <hr class="my-4" />
                <p>{movie.genre}</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>

        </div>
    )
}

Movie.getInitialProps = async ({query}) => {
    const movie = await getMovieById(query.id);

    return { movie }
}

export default Movie; 