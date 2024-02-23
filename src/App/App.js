import './App.css';
import SearchBar from '../Features/SearchBar/SearchBar';
import MovieCard from '../Features/MovieCard/MovieCard';
import { movieData } from '../Features/MovieList/MovieListSlice';
import MovieList from '../Features/MovieList/MovieList';
function App({state, dispatch}) {
  return (
    <div className="App">
      <h1>No More Movies</h1>
      <SearchBar state={state} dispatch={dispatch} />
      <MovieList state={state} dispatch={dispatch} movieData={movieData} />
    </div>
  );
}

export default App;
//<MovieCard state={state} dispatch={dispatch} movie={movieData[0]} />
