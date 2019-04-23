import { combineReducers } from 'redux';
import { newsData, validation, userProfile, logoutModal } from './reducers';

export const initialState = {
    newsData: {
        news: [],
        error: "",
        isLoading: false,
        pageIsEmpty: true
    },
    validation: {
        isLogged: false,
        error: "",
        isLoading: false,
        userId: 0
    },
    userProfile: {
        info: {},
        error: "",
        isLoading: false,
    },
    logoutModal: {
        modalIsOpen: false
    }
};

export default combineReducers({
    newsData,
    validation,
    userProfile,
    logoutModal,
})