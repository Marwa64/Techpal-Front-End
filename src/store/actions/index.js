import axios from 'axios';
import { TOGGLE_SIDEBAR, TOGGLE_MODE, SIGN_UP, LOGIN, SET_TOKEN, REMOVE_TOKEN, SET_TRACKS } from './types';

const url = 'http://localhost:8080/api'

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
  return axios.post(`${url}/signup`, user).then(res => {
    // extract user data and token
    let token = res.data.split("{")[0];
    token = token.replaceAll('"','');
    let userData = JSON.parse(`{${res.data.split("{")[1]}`)

    localStorage.setItem("token", token);
    localStorage.setItem("userId", userData.ID);

    // save user data and token in state
    dispatch({type: SIGN_UP, data: userData})
    dispatch({type: SET_TOKEN, data: token})

  }).catch(err => {
    console.log(err)
  })
}

export const login = (user) => async dispatch => {
  return axios.post(`${url}/login`, user).then(res => {
    // extract user data and token
    let token = res.data.split("{")[0];
    token = token.replaceAll('"','');
    let userData = JSON.parse(`{${res.data.split("{")[1]}`)

    localStorage.setItem("token", token);
    localStorage.setItem("userId", userData.ID);

    // save user data and token in state
    dispatch({type: LOGIN, data: userData})
    dispatch({type: SET_TOKEN, data: token})

  }).catch(err => {
    console.log(err)
  })
}

export const getUser = (userId) => async dispatch => {
    return axios.get(`${url}/getuser/${userId}`).then(res => {
      dispatch({type: LOGIN, data: res.data})
    }).catch(err => {
      console.log(err)
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


export const getTracks = () => async dispatch => {
  return axios.get(`${url}/getalltracks`).then(res => {
    dispatch({type: SET_TRACKS, data: res.data});
  }).catch(err => {
    console.log(err)
  })
}