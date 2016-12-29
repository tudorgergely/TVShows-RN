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

export const starTvShow = tvShow => ({type: STAR_TV_SHOW, tvShow});
export const loadFavorites = () => ({type: LOAD_FAVORITES});

export const persistFavoritesEpic = (actions$, store) => actions$.ofType(STAR_TV_SHOW)
    .mergeMap(async() => {
        const state = store.getState().favorite;
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favoriteTvShows));
        return {type: FAVORITE_SAVED};
    });

export const loadInitialFavoritesEpic = actions$ => actions$.ofType(LOAD_FAVORITES)
    .mergeMap(async() => {
        const favoritesString = await AsyncStorage.getItem(FAVORITES_KEY);
        const favoriteTvShows = JSON.parse(favoritesString);
        return {type: FAVORITES_LOADED, favoriteTvShows};
    });