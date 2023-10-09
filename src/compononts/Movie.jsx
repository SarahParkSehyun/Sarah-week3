import React, { useState } from "react";
import MovieDescription from "./MovieDescription";
import {
  MovieContainer,
  MovieImage,
  MovieTitle,
  MovieRating,
  MovieDescriptionOverlay,
} from './Movie.style.jsx';

function Movie(props) {
  const [showDescription, setShowDescription] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;

  return (
    <MovieContainer
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <MovieImage src={imageUrl} alt={props.movie.title} />
      <MovieTitle>{props.movie.title}</MovieTitle>
      <MovieRating>{props.movie.vote_average}/10</MovieRating>

      {showDescription && (
        <MovieDescriptionOverlay>
          <MovieDescription movie={props.movie} />
        </MovieDescriptionOverlay>
      )}
    </MovieContainer>
  );
}

export default Movie;
