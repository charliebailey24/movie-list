import React from 'react';
import App from './App.jsx';

const MovieList = (props) => {
  console.log(props.movies[0]);
  const movies = props.movies;
  const movieList = movies.map((movie) => {
    return (<div>{movie.title}</div>);
  })

 return (
   <div id="movie-list">{movieList}</div>
 );

};


export default MovieList;