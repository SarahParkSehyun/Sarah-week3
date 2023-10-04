import React from "react";

function MovieDescription(props) {
  return (
    <div className="p-4 bg-black bg-opacity-20 rounded absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
      <h3 className="text-base font-bold mb-4 text-white">{props.movie.title}</h3>
      <p className="text-xs max-h-[200px] overflow-y-auto text-white">{props.movie.overview}</p>
    </div>
  );
}

export default MovieDescription;

