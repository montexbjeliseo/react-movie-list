import React from "react";
import "./style.css";
import { MovieCard } from "./MovieCard";

const movies = [
  {
    "poster": "http://dummyimage.com/227x213.png/cc0000/ffffff",
    "title": "Sniper, The",
    "releaseDate": "3/13/1905",
    "duration": "2:51 PM",
    "maturity": "R",
    "genres": [
      "Horror",
      "Comedy",
      "Action"
    ],
    "director": "Salomon Eslinger",
    "mainActors": [
      "Dilly Mazillius",
      "Adrian McElvogue"
    ],
    "plot": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "metascore": 96,
    "rating": 9.3
  },
  {
    "poster": "http://dummyimage.com/227x213.png/cc0000/ffffff",
    "title": "Sniper, The",
    "releaseDate": "3/13/1905",
    "duration": "2:51 PM",
    "maturity": "R",
    "genres": [
      "Horror",
      "Comedy",
      "Action"
    ],
    "director": "Salomon Eslinger",
    "mainActors": [
      "Dilly Mazillius",
      "Adrian McElvogue"
    ],
    "plot": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "metascore": 40,
    "rating": 9.3
  },
]

export default function App() {
  return (
    <div className="movie-list">
      {movies && movies.map(movie => {
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
  );
}
