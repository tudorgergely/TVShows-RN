import {combineEpics} from 'redux-observable';
import contact, {sendMessageEpic} from './contact';
import {combineReducers} from 'redux';
import routes from "./routes";
import home, {initialLoadEpic} from "./home";

export const rootEpic = combineEpics(
    sendMessageEpic,
    initialLoadEpic
);

export const rootReducer = combineReducers({
    routes,
    contact,
    home
});