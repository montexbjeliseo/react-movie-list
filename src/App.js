import React from "react";
import "./style.css";
import { MovieCard } from "./MovieCard";
import moviesData from "./MOVIES_DATA.json";


export default function App() {
  return (
    <>
    
    <div className="movie-list">
    <h1>Listado de películas</h1>
      {moviesData && moviesData.map(movie => {
        return (
          <MovieCard
            poster={movie.poster} 
            title={movie.title}
            releaseDate={movie.releaseDate}
            duration={movie.duration}
            maturity={movie.maturity}
            genres={movie.genres}
            director={movie.director}
            mainActors={movie.mainActors}
            plot={movie.plot}
            metascore={movie.metascore}
            rating={movie.rating}
          />
        )
      })}
    </div>
    </>
  );
}
