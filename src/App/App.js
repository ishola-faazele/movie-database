import './App.css';
import SearchBar from '../Features/SearchBar/SearchBar';
function App({state, dispatch}) {
  return (
    <div className="App">
      <h1>No More Movies</h1>
      <SearchBar state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
