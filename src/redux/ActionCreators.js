import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCampsites = () => dispatch => { //nested an arrow function inside of another arrow function due to redux thunk!

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000); //2 seconds delay 
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
}); //goes straight to reducer as normal so no payload necessary

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});