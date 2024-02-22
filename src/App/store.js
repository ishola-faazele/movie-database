import { createStore, combineReducers } from 'redux';
import { watchListReducer } from '../Features/WatchList/WatchListSlice';
import { searchTermReducer } from '../Features/SearchBar/SearchBarSlice';
import { allMoviesReducer } from '../Features/MovieList/MovieListSlice';

const reducers = {
    watchList: watchListReducer,
    searchTerm: searchTermReducer,
    allMovies: allMoviesReducer,
}

export const store = createStore(combineReducers(reducers));