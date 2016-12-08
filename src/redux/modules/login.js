const PROGRESS = 'tvshows/login/PROGRESS';
const SUCCESS = 'tvshows/login/SUCCESS';
const FAIL = 'tvshows/login/FAIL';

const defaultState = {
    progress: false,
    loggedIn: false,
    user: null,
    error: null,
};

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case PROGRESS:
            return {
                ...state,
                progress: true
            };
        case SUCCESS:
            return {
                ...state,
                progress: false,
                user: action.user
            };
        case FAIL:
            return {
                ...state,
                progress: false,
                user: null,
                error: action.error
            };
        default:
            return state;
    }
}

export function startLogin() {
    return {
        type: PROGRESS,
        progress: true
    };
}

export function loginSuccess(user) {
    return {
        type: SUCCESS,
        user
    };
}

export function loginFail(error) {
    return {
        type: FAIL,
        error
    };
}


