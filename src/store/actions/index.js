import axios from 'axios';
import { TOGGLE_SIDEBAR, TOGGLE_MODE, SIGN_UP, LOGIN, SET_TOKEN, REMOVE_TOKEN } from './types';

const url = 'http://164.90.149.69:3000/api'

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
    dispatch({type: SIGN_UP, data: res.user})
    setToken(res.token)
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token: token
  }
}

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN
  }
}