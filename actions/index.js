import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const MOVIE_DATA = []

const CATERGORY_DATA = [
    {id: 'c-0', name: 'all' },
    { id: 'c-1', name: 'drama' },
    { id: 'c-2', name: 'action' },
    { id: 'c-3', name: 'adventure' },
    { id: 'c-4', name: 'historical' }
];

export const getMovies = () => {
    {/* return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA);
        }, 100);
    }); */}
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
}

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const updateMovie = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
        .then(res => res.data)
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5);
    return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
}


export const getCategories = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(CATERGORY_DATA);
        }, 100);
    });
}

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const getPosts = () => {
    return axios.get(`${BASE_URL}/api/v1/posts/`).then(res => res.data)
}