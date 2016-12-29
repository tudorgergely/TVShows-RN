import {ajax} from "rxjs/observable/dom/ajax";
import {parseTvShowResponse} from "./tvShowDetail";

const SEARCH_TV_SHOWS = 'tvshows/search/SEARCH_TV_SHOWS';
const SEARCH_RESULTS = 'tvshows/search/SEARCH_RESULTS';

const defaultState = {
    tvShows: [],
    searching: false,
    error: null,
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case SEARCH_TV_SHOWS:
            return {
                ...state,
                searching: true
            };
        case SEARCH_RESULTS:
            return {
                ...state,
                tvShows: action.tvShows,
                searching: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const genericSearch = (q, page) => ({type: SEARCH_TV_SHOWS, q, page});

export const searchTvShowsEpic = actions$ => actions$.ofType(SEARCH_TV_SHOWS)
    .mergeMap(({q, page}) => ajax.getJSON(`http://www.omdbapi.com/?s=${q + '*'}&r=json`)
        .map(fetchTvShowFulfilled)
    );

const fetchTvShowFulfilled = response => ({type: SEARCH_RESULTS, ...parseSearchResponse(response)});

const parseSearchResponse = response => {
    const error = response.Error;
    if (error) {
        return {error};
    }
    const tvShows = response.Search.map(parseTvShowResponse);
    return {
        error,
        tvShows
    };
};