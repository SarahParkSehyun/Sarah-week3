import React, { useState } from "react";
import MovieDescription from "./MovieDescription";

function Movie(props) {
  const [showDescription, setShowDescription] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;

  return (
    <div style={{ backgroundColor: '#646496' }}
      className="w-40 p-4 m-4 relative rounded shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={imageUrl} alt={props.movie.title} className="w-full rounded-t" />
      <h2 className="text-sm font-semibold mt-2 text-white">{props.movie.title}</h2>
      <p className="text-yellow-900 font-medium">{props.movie.vote_average}/10</p>

      {showDescription && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black flex items-center justify-center text-white">
          <MovieDescription movie={props.movie} />
        </div>
      )}
    </div>
  );
}

export default Movie;
