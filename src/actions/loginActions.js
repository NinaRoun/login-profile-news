import 'cross-fetch/polyfill';
import fetch from 'cross-fetch';
import * as types from './types';

const apiURL = "https://mysterious-reef-29460.herokuapp.com/api/v1/validate";
const errorMsg = "Check your username / password and try again, please!";

function fetchLoginRequest() {
    return {
        type: types.FETCH_LOGIN_REQUEST
    }
}

function fetchLoginSuccess(body) {
    //console.log('in fetchNewsSuccess ');
    return {
        type: types.FETCH_LOGIN_SUCCESS,
        payload: body
    }
}

function fetchLoginFailure(ex) {
    //console.log('error ', ex);
    return {
        type: types.FETCH_LOGIN_FAILURE,
        payload: errorMsg
    }
}

export function logOut() {
    //console.log('error ', ex);
    return {
        type: types.LOG_OUT,
        payload: 0
    }
}

export function getUserInfo(credentials) {
    // return (dispatch) => {
    //     console.log('dispatch', dispatch, 'credentials', credentials);
    // }
    return dispatch => {
        //console.log('got first dispatch in action ', credentials);
        dispatch(fetchLoginRequest());
        return fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify({email: credentials.username, password: credentials.password}),
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                //console.log('got result from api, ', res.json());
                return res.json()})
            //.then(json => receivePosts(json))
            .then(body => {
                //console.log('final data ', body.status);
                if(body.status === 'ok'){
                    //console.log('successful payload = ' + body.data.id);
                    return dispatch(fetchLoginSuccess(body.data.id))
                }
                return dispatch(fetchLoginFailure());
            })
            .catch(ex => dispatch(fetchLoginFailure(ex)))
    }
}

