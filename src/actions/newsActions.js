import 'cross-fetch/polyfill';
import fetch from 'cross-fetch';
import * as types from './types';

const apiURL = "https://mysterious-reef-29460.herokuapp.com/api/v1/news";
//https://mysterious-reef-29460.herokuapp.com/api/v1/news
const errorMsg = "An error has occurred while sending the request!";

function fetchNewsRequest() {
    return {
        type: types.FETCH_NEWS_REQUEST
    }
}

function fetchNewsSuccess(body) {
    //console.log('in fetchNewsSuccess ', body);
    return {
        type: types.FETCH_NEWS_SUCCESS,
        payload: body
    }
}

function fetchNewsFailure(ex) {
    //console.log('error ', ex);
    return {
        type: types.FETCH_NEWS_FAILURE,
        payload: errorMsg
    }
}

export function fetchNews() {
    return dispatch => {
        //console.log('got first dispatch in action');
        dispatch(fetchNewsRequest());
        return fetch(apiURL)
            .then(res => {
                //console.log('got result from api, ', res.json());
                //const newsData = res.json();
                //console.log('result from api ', newsData.data);
                return res.json()})
            //.then(json => receivePosts(json))
            .then(body => {
                //console.log('final data ', body.data);
                return dispatch(fetchNewsSuccess(body.data))
            })
            .catch(ex => dispatch(fetchNewsFailure(ex)))
    }
}

