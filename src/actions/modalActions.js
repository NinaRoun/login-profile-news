import * as types from './types';

// const apiURL = "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1";
// const errorMsg = "Server error< please try later!";

export function openModal() {
    console.log('in openModal action');
    return {
            type: types.OPEN_MODAL
    }
}

// function afterOpenModal(body) {
//     //console.log('in fetchNewsSuccess, got data ' + body);
//     return {
//         type: types.AFTER_OPEN_MODAL,
//         //payload: body
//     }
// }

export function closeModal() {
    console.log('in closeModal action');
    return {
        type: types.CLOSE_MODAL,
        //payload: errorMsg
    }
}

// export function setModal(credentials) {
//     return dispatch => {
//         //console.log('got first dispatch in action ', credentials);
//         dispatch(fetchProfileRequest());
//         return fetch(apiURL)
//             .then(res => {
//                 //console.log('got result from api, ', res.json());
//                 return res.json()})
//             //.then(json => receivePosts(json))
//             .then(body => {
//                 //console.log('final data ', body.status);
//                 if(body.status === 'ok'){
//                     //console.log('successful payload = ' + body.data.languages);
//                     return dispatch(fetchProfileSuccess(body.data))
//                 }
//                 return dispatch(fetchProfileFailure());
//             })
//             .catch(ex => dispatch(fetchProfileFailure(ex)))
//     }
// }

