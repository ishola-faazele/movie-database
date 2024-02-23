import React,{useState} from "react";
import { addMovie,removeMovie } from "../WatchList/WatchListSlice";

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
        <div className="MovieCard" title={movie.description}>
            <h2>Title: {movie.title}</h2>
            <p>Genre: {movie.year}</p>
            <p>Release Year: {movie.year}</p>
            <div className="watchlist" onClick={handleWatchList}>📺✅</div>
        </div>
    )
}