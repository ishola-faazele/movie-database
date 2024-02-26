export const movieData = [
    {
      id: 1,
      title: "Inception",
      genre: "Science Fiction",
      year: 2010,
      description: "A thief who enters the dreams of others to steal their secrets.",
      watchlist: false,
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      watchlist: false,
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      description: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      watchlist: false,
    },
    {
        id: 4,
        title: "Pulp Fiction",
        genre: "Crime",
        year: 1994,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        watchlist: false,
      },
      {
        id: 5,
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        watchlist: false,
      },
      {
        id: 6,
        title: "The Matrix",
        genre: "Action",
        year: 1999,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        watchlist: false,
      },
    // Add more movie objects as needed
];
  
export const changeStatus = (id) => {
  return {
    type: 'allMovies/changeStatus',
    payload: id
  }
}

export const loadData = () => {
  return {
        type: 'allMovies/loadData',
        payload: movieData
    }
}
const initialAllMovies = []
export const allMoviesReducer = (allMovies = initialAllMovies, action) => {
    switch(action.type) {
        case 'allMovies/loadData':
            return action.payload
        case 'allMovies/changeStatus':
            return allMovies.map(movie => {
              if(String(movie.id, 10) === String(action.payload,10)) {
                return {
                  ...movie,
                  watchlist: !movie.watchlist
                };
              } else {
                return movie;
              }
            })
        default:
            return allMovies
    }
}



