import './App.css';
import SearchBar from '../Features/SearchBar/SearchBar';
import { movieData } from '../Features/MovieList/MovieListSlice';
import MovieList from '../Features/MovieList/MovieList';
import { loadData } from '../Features/MovieList/MovieListSlice';
function App({state, dispatch}) {
  const movies = dispatch(loadData);
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
