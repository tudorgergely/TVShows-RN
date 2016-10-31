import {combineEpics} from 'redux-observable';
import contact, {sendMessageEpic} from './contact';
import {combineReducers} from 'redux';

export const rootEpic = combineEpics(
    sendMessageEpic,
);

export const rootReducer = combineReducers({
    contact
});