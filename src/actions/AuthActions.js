/* eslint-disable max-len */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, SELECT_LIBRARY, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER } from './types';
 

export const selectLibrary = (libraryID) => ({
        type: SELECT_LIBRARY,
        payload: libraryID,
    });

export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text,
});

export const passwordChanged = (text) => ({
        type: PASSWORD_CHANGED,
        payload: text,
});

export const loginUser = ({ email, password }) => {
        return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFailed(dispatch)); 
        });
        };
};

const loginUserFailed = (dispatch) => {
        dispatch({
                type: LOGIN_USER_FAILED,
        });
};

const loginUserSuccess = (dispatch, user) => {
        dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user,
        });
        Actions.main();
};
