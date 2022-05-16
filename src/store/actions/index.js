import axios from 'axios';
import { TOGGLE_SIDEBAR, TOGGLE_MODE, SET_USER, SET_TOKEN, REMOVE_TOKEN, SET_TRACKS, SET_CURRENT_PROFILE, SET_CURRENT_TRACK, SET_PROFILES } from './types';

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
    dispatch({type: SET_USER, data: userData})
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
    dispatch({type: SET_USER, data: userData})
    dispatch({type: SET_TOKEN, data: token})

  }).catch(err => {
    console.log(err)
  })
}

export const getUser = (userId) => async dispatch => {
    return axios.get(`${url}/getuser/${userId}`).then(res => {
      dispatch({type: SET_USER, data: res.data})
    }).catch(err => {
      console.log(err)
    })
}

export const updateStudent = (userId, user) => async dispatch => {
  return axios.post(`${url}/updatestudent/${userId}`, user).then(res => {
    dispatch({type: SET_USER, data: res.data})
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
    dispatch({type: SET_TRACKS, data: res.data})
  }).catch(err => {
    console.log(err)
  })
}

export const createProfile = (user_id, newProfile) => async dispatch => {
  return axios.post(`${url}/createprofile/${user_id}`, newProfile).then(res => {
    dispatch({type: SET_CURRENT_PROFILE, data: res.data})
  }).catch(err => {
    console.log(err)
  })
}

export const getCurrentProfile = (user_id) => async dispatch => {
  return axios.get(`${url}/getcurrentprofile/${user_id}`).then(async(res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    dispatch({type: SET_CURRENT_PROFILE, data: res.data})
  }).catch(err => {
    console.log(err)
  })
}

export const getCurrentTrack = (track_id) => async dispatch => {
  return axios.get(`${url}/gettrack/${track_id}`).then(res => {
    dispatch({type: SET_CURRENT_TRACK, data: res.data})
  }).catch(err => {
    console.log(err)
  })
}

export const getProfiles = (user_id) => async dispatch => {
  return axios.get(`${url}/getallprofiles/${user_id}`).then(async(res) => {
    if (res.data) {
      await dispatch({type: SET_PROFILES, data: res.data})
    } else {
      await dispatch({type: SET_PROFILES, data: []})
    }
  }).catch(err => {
    console.log(err)
  })
}