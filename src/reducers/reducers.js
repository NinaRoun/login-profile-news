import * as types from '../actions/types';
import { initialState } from './index';

export const newsData = (state = initialState.newsData, action) => {
    switch (action.type) {
        case types.FETCH_NEWS_REQUEST:
            //console.log('in FETCH_NEWS_REQUEST', state);
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case types.FETCH_NEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case types.FETCH_NEWS_SUCCESS:
            //console.log('in reducer success ', action.payload, state); //array of 2 objects
            return {
                ...state,
                news: [...state.news, ...action.payload],
                isLoading: false,
                error: "",
                pageIsEmpty: false
            };
        default:
            return state
    }
};

export const validation = (state = initialState.validation, action) => {
    switch (action.type) {
        case types.FETCH_LOGIN_REQUEST:
            //console.log('in FETCH_NEWS_REQUEST');
            return {
                ...state,
                isLogged: false,
                isLoading: true,
                error: ""
            };
        case types.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                error: "",
                userId: action.payload
            };
        case types.FETCH_LOGIN_FAILURE:
            //console.log('in reducer failure ', action.payload);
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                error: action.payload,
                userId: 0
            };
        case types.LOG_OUT:
            //console.log('in reducer failure ', action.payload);
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                error: "",
                userId: 0
            };
        default:
            return state
    }
};

export const userProfile = (state = initialState.userProfile, action) => {
    switch (action.type) {
        case types.FETCH_PROFILE_REQUEST:
            //console.log('in FETCH_NEWS_REQUEST');
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case types.FETCH_PROFILE_SUCCESS:
            //console.log('in userProfile, action = ' + action.payload);
            return {
                ...state,
                isLoading: false,
                error: "",
                info: {...state.info, ...action.payload},
            };
        case types.FETCH_PROFILE_FAILURE:
            //console.log('in reducer failure ', action.payload);
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                info: {},
            };
        default:
            return state
    }
};

export const logoutModal = (state = initialState.logoutModal, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            //console.log('in FETCH_NEWS_REQUEST');
            return {
                ...state,
                modalIsOpen: true,
            };
        case types.CLOSE_MODAL:
            //console.log('in userProfile, action = ' + action.payload);
            return {
                ...state,
                modalIsOpen: false,
            };
        default:
            return state
    }
};