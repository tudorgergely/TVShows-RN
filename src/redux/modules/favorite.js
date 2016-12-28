import {AsyncStorage} from "react-native";

const FAVORITES_KEY = '@tvShows/favorites';

const STAR_TV_SHOW = 'tvshows/favorite/STAR_TV_SHOW';
const FAVORITE_SAVED = 'tvshows/favorite/FAVORITE_SAVED';
const LOAD_FAVORITES = 'tvshows/favorite/LOAD_FAVORITES';
const FAVORITES_LOADED = 'tvshows/favorite/FAVORITES_LOADED';

const defaultState = {
    favoriteTvShows: [],
    persisted: false,
    loading: false,
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case STAR_TV_SHOW:
            return {
                ...state,
                persisted: false,
                favoriteTvShows: [...state.favoriteTvShows, action.tvShow]
            };
        case FAVORITE_SAVED:
            return {
                ...state,
                persisted: true
            };
        case LOAD_FAVORITES:
            return {
                ...state,
                loading: true
            };
        case FAVORITES_LOADED:
            return {
                ...state,
                favoriteTvShows: action.favoriteTvShows || [],
                loading: false
            };
        default:
            return state;
    }
}

export function starTvShow(tvShow) {
    return {
        type: STAR_TV_SHOW,
        tvShow
    }
}

export function loadFavorites() {
    return {
        type: LOAD_FAVORITES
    };
}

export function persistFavoritesEpic(actions$, store) {
    return actions$.ofType(STAR_TV_SHOW)
        .mergeMap(() => {
            const state = store.getState().favorite;
            return AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favoriteTvShows))
                .then(() => ({
                    type: FAVORITE_SAVED
                }));
        });
}

export function loadInitialFavoritesEpic(actions$) {
    return actions$.ofType(LOAD_FAVORITES)
        .mergeMap(() => {
            return AsyncStorage.getItem(FAVORITES_KEY)
                .then(favoritesString => JSON.parse(favoritesString))
                .then(favoriteTvShows => {
                    return ({
                        type: FAVORITES_LOADED,
                        favoriteTvShows
                    });
                });
        })
}