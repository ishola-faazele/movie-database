import React,{useState} from "react";
import { addMovie,removeMovie } from "../WatchList/WatchListSlice";
import { changeStatus } from "../MovieList/MovieListSlice";
import './MovieCard.css';
import { movieData } from "../MovieList/MovieListSlice";
export default function MovieCard({movie, dispatch, state}) {
    const handleWatchList = ({target})=> {
        const idToChange = target.parentNode.id;
        if(movie.watchlist === false) {
            dispatch(addMovie(movie));
            dispatch(changeStatus(idToChange))
            console.log(state.allMovies)
        }
        else {
            dispatch(removeMovie(movie));
            
        }
        
    }
    return (
        <div className="MovieCard" id={movie.id}>
            <h2 title={movie.description}>{movie.title}</h2>
            <p>Genre: {movie.year}</p>
            <p>Release Year: {movie.year}</p>
            <div className="watchlist" onClick={handleWatchList} title="Add to watchlist">📺</div>
        </div>
    )
}