import {Observable} from 'rxjs/bundles/Rx';
import {Linking} from 'react-native';
import Rx from 'rxjs/Rx';

const SEND = 'tvshows/contact/SEND';
const DONE = 'tvshows/contact/DONE';
const TYPING = 'tvshows/contact/TYPING';
const ERROR = 'tvshows/contact/ERROR';

const defaultState = {
    sending: true,
    body: null,
    sendError: null,
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case TYPING:
            return {
                ...state,
                sending: false,
                body: action.body,
                error: null,
            };
        case SEND:
            return {
                ...state,
                sending: true,
                error: null
            };
        case DONE:
            return {
                ...state,
                sending: false,
                body: null
            };
        case ERROR:
            return {
                ...state,
                sending: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export function sendMessage(body) {
    return {
        type: SEND,
        body
    };
}

export function changeBody(body) {
    return {
        type: TYPING,
        body,
    };
}

export function sendMessageEpic(action$) {
    return action$.ofType(SEND)
        .mergeMap(action => {
            if (!action.body) {
                return Observable.from([{type: ERROR, error: 'Please type some message for us!'}]);
            }
            return Observable.fromPromise(
                Linking.openURL(`mailto:tudorgergely@gmail.com?subject=contact&body=${action.body}`)
            ).mapTo({type: DONE})
        });
}
