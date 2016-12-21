import {combineEpics} from 'redux-observable';
import contact, {sendMessageEpic} from './contact';
import {combineReducers} from 'redux';
import routes from "./routes";
import home, {initialLoadEpic} from "./home";
import tvShowDetail, {loadTvShowEpic} from "./tvShowDetail";
import search, {searchTvShowsEpic} from "./search";
import favorite, {persistFavoritesEpic, loadInitialFavoritesEpic} from "./favorite";

export const rootEpic = combineEpics(
    sendMessageEpic,
    initialLoadEpic,
    loadTvShowEpic,
    searchTvShowsEpic,
    persistFavoritesEpic,
    loadInitialFavoritesEpic
);

export const rootReducer = combineReducers({
    routes,
    contact,
    home,
    tvShowDetail,
    search,
    favorite
});