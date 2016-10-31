import {Observable} from 'rxjs/bundles/Rx';
import {Linking} from 'react-native';
import Rx from 'rxjs/Rx';

const SEND = 'tvshows/contact/SEND';
const DONE = 'tvshows/contact/DONE';
const TYPING = 'tvshows/contact/TYPING';

const defaultState = {
    sending: true,
    body: null,
};

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case TYPING:
            return {
                ...state,
                sending: false,
                body: action.body
            };
        case SEND:
            return {
                ...state,
                sending: true,
            };
        case DONE:
            return {
                ...state,
                sending: false,
                body: null
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
            return Observable.fromPromise(
                Linking.openURL(`mailto:tudorgergely@gmail.com?subject=contact&body=${action.body}`)
            ).mapTo({type: DONE})
        });
}
