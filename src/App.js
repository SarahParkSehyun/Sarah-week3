import React from 'react';
import Movie from './compononts/Movie';
import { movies } from './movieDummy';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: '#3C3C8C	' }} className="app-container h-full w-[2000px] overflow-x-auto flex flex-wrap">
      {
        movies.results.map((item, index) => {
          return (
            <Movie key={index} movie={item} />
          )
        })
      }
    </div>
  );
}

export default App;

