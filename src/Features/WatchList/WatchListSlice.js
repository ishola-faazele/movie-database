export const addMovie = (movie) => {
    return {
        type: 'watchList/addMovie',
        payload: movie
    }
};

export const removeMovie = (movie)  => {
    return {
        type: 'watchList/removeMovie',
        payload: movie
    };
};

const initialWatchList = []
export const watchListReducer = (watchList =initialWatchList, action) => {
    switch(action.type) {
        case 'watchList/addMovie':
            return [...watchList, action.payload]
        case 'watchList/removeMovie' :
            return watchList.filter(movie => {
                return movie.id !== action.payload.id;
            })
        default:
            return watchList;
    }
}

