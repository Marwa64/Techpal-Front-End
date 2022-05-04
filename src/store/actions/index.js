import axios from 'axios';
import { TOGGLE_SIDEBAR, TOGGLE_MODE, SIGN_UP, LOGIN, SET_TOKEN, REMOVE_TOKEN } from './types';

const url = 'http://localhost:5000/api'

export const toggleSidebar = () => {
    return {
      type: TOGGLE_SIDEBAR
    };
};

export const toggleMode = () => {
  return {
    type: TOGGLE_MODE
  };
};

export const signup = (user) => async dispatch => {
  axios.post(`${url}/signup`, user).then(res => {
    // extract user data and token
    let token = res.data.split("{")[0];
    token = token.replaceAll('"','');
    let userData = JSON.parse(`{${res.data.split("{")[1]}`)

    // save user data and token in state
    dispatch({type: SIGN_UP, data: userData})
    dispatch({type: SET_TOKEN, data: token})

    return token;
  }).catch(err => {
    console.log(err)
    return null;
  })
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  }
}

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN
  }
}