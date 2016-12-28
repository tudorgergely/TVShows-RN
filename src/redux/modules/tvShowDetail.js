import {ajax} from "rxjs/observable/dom/ajax";

const LOAD_TV_SHOW = 'tvshows/tvShowDetail/LOAD_TV_SHOW';
const LOADED = 'tvshows/tvShowDetail/LOADED';

const defaultState = {
    tvShow: {},
    loading: true
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case LOAD_TV_SHOW:
            return {
                ...state,
                loading: true
            };
        case LOADED:
            return {
                ...state,
                tvShow: action.tvShow,
                loading: false
            };
        default:
            return state;
    }
}

export function loadTvShow(id) {
    return {
        type: LOAD_TV_SHOW,
        id
    };
}

export function loadTvShowEpic(actions$) {
    return actions$.ofType(LOAD_TV_SHOW)
        .mergeMap(({id}) => {
                return ajax.getJSON(`http://www.omdbapi.com/?i=${id}&plot=full&r=json`)
                    .map(fetchTvShowFulfilled)
            }
        )
}

const fetchTvShowFulfilled = payload => ({type: LOADED, tvShow: parseTvShowResponse(payload)});

export const parseTvShowResponse = (payload) => {
    const {Title, Year, Plot, Poster, imdbID} = payload;
    return ({
        title: Title,
        year: Year,
        plot: Plot,
        posterUrl: Poster,
        id: imdbID
    });
}