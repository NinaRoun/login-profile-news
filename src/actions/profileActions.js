import 'cross-fetch/polyfill';
import fetch from 'cross-fetch';
import * as types from './types';

const apiURL = "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1";
const errorMsg = "Server error< please try later!";

function fetchProfileRequest() {
    return {
            type: types.FETCH_PROFILE_REQUEST
    }
}

function fetchProfileSuccess(body) {
    //console.log('in fetchNewsSuccess, got data ' + body);
    return {
        type: types.FETCH_PROFILE_SUCCESS,
        payload: body
    }
}

function fetchProfileFailure(ex) {
    //console.log('error ', ex);
    return {
        type: types.FETCH_PROFILE_FAILURE,
        payload: errorMsg
    }
}

export function getProfile(credentials) {
    // return (dispatch) => {
    //     console.log('dispatch', dispatch, 'credentials', credentials);
    // }
    return dispatch => {
        //console.log('got first dispatch in action ', credentials);
        dispatch(fetchProfileRequest());
        return fetch(apiURL)
            .then(res => {
                //console.log('got result from api, ', res.json());
                return res.json()})
            //.then(json => receivePosts(json))
            .then(body => {
                //console.log('final data ', body.status);
                if(body.status === 'ok'){
                    //console.log('successful payload = ' + body.data.languages);
                    return dispatch(fetchProfileSuccess(body.data))
                }
                return dispatch(fetchProfileFailure());
            })
            .catch(ex => dispatch(fetchProfileFailure(ex)))
    }
}

