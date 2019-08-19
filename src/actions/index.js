import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispath) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUsersuccess(dispath, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUsersuccess(dispath, user))
                    .catch(() => loginUserFail(dispath));
            });
    };
};

const loginUserFail = (dispath) => {
    dispath({ type: LOGIN_USER_FAIL });
};

const loginUsersuccess = (dispath, user) => {
    dispath({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};