import {combineEpics} from "redux-observable";
import contact, {sendMessageEpic} from "./contact";
import {combineReducers} from "redux";
import routes from "./routes";
import tvShowDetail, {loadTvShowEpic} from "./tvShowDetail";
import search, {searchTvShowsEpic} from "./search";
import favorite, {persistFavoritesEpic, loadInitialFavoritesEpic} from "./favorite";

export const rootEpic = combineEpics(
    sendMessageEpic,
    loadTvShowEpic,
    searchTvShowsEpic,
    persistFavoritesEpic,
    loadInitialFavoritesEpic
);

export const rootReducer = combineReducers({
    routes,
    contact,
    tvShowDetail,
    search,
    favorite
});