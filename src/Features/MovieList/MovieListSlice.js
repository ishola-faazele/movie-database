const movieData = ''
export export const loadData = () => {
    return {
        type: 'allMovies/loadData',
        payload: movieData
    }
}
const initialAllMovies = []
export const allMoviesReducer = (allMovies = initialAllMovies, action) {
    switch(action.type) {
        case 'allMovies/loadData':
            return action.payload
        default:
            return allMovies
    }
}