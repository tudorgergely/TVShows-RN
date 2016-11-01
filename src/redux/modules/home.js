import {Observable} from 'rxjs/bundles/Rx';
import {Linking} from 'react-native';
import Rx from 'rxjs/Rx';

const START = 'tvshows/home/START';
const LOAD = 'tvshows/home/LOAD';

const defaultState = {
    items: []
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case START:
            return {
                ...state,
            };
        case LOAD:
            return {
                ...state,
                items: action.items
            };
        default:
            return state;
    }
}

export function loadInitialData() {
    return {
        type: START
    };
}

export function initialLoadEpic(actions$) {
    return actions$.ofType(START)
        .debounceTime(1000)
        .mapTo({
            type: LOAD, // hardcoded list for initial version
            items: ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b',]
        })
}