import {Observable} from "rxjs/bundles/Rx";
import {Linking} from "react-native";

const SEND = 'tvshows/contact/SEND';
const DONE = 'tvshows/contact/DONE';
const TYPING = 'tvshows/contact/TYPING';
const ERROR = 'tvshows/contact/ERROR';

const defaultState = {
    sending: true,
    body: null,
    error: null,
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
                sending: true
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

export const sendMessage = body => ({type: SEND, body});
export const changeBody = body => ({type: TYPING, body});

export const sendMessageEpic = action$ => action$.ofType(SEND)
    .mergeMap(async action => {
        if (!action.body) {
            return {type: ERROR, error: 'Please type some message for us!'};
        }
        await Linking.openURL(`mailto:tudorgergely@gmail.com?subject=contact&body=${action.body}`);
        return {type: DONE};
    });
