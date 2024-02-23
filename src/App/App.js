import './App.css';
import SearchBar from '../Features/SearchBar/SearchBar';
import MovieCard from '../Features/MovieCard/MovieCard';
import { movieData } from '../Features/MovieList/MovieListSlice';
function App({state, dispatch}) {
  return (
    <div className="App">
      <h1>No More Movies</h1>
      <SearchBar state={state} dispatch={dispatch} />
      <MovieCard state={state} dispatch={dispatch} movie={movieData[0]} />
    </div>
  );
}

export default App;
