import React,{useState} from "react";
import { addMovie,removeMovie } from "../WatchList/WatchListSlice";
import './MovieCard.css';

export default function MovieCard({movie, dispatch, state}) {
    const handleWatchList = ({target})=> {
        if(movie.watchlist === false) {
            dispatch(addMovie(movie));
            movie.watchlist = true;
            //console.log(movie.watchlist)
        }
        else {
            dispatch(removeMovie(movie));
            //console.log(movie.watchlist)
        }
        
    }
    return (
        <div className="MovieCard" >
            <h2 title={movie.description}>{movie.title}</h2>
            <p>Genre: {movie.year}</p>
            <p>Release Year: {movie.year}</p>
            <div className="watchlist" onClick={handleWatchList} title="Add to watchlist">📺</div>
        </div>
    )
}