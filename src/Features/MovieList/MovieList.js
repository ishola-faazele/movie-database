import MovieCard from "../MovieCard/MovieCard";
import React from "react";

export default function MovieList({movieData, dispatch, state}) {
    return (
        movieData.map((movie)=>{
            return <MovieCard movie={movie} dispatch={dispatch} state={state} />
        })
    )
}