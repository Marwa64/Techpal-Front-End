import axios from 'axios'
import {
  TOGGLE_SIDEBAR, TOGGLE_MODE, SET_USER,
  SET_TOKEN, REMOVE_TOKEN, SET_TRACKS,
  SET_CURRENT_PROFILE, SET_CURRENT_TRACK,
  SET_PROFILES, REMOVE_PROFILE, ADD_TRACK,
  SET_ACCEPTED_MENTORS, ADD_ACCEPTED_MENTOR,
  SET_NOT_ACCEPTED_MENTORS
} from './types'

const url = 'http://localhost:8080/api'

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export const toggleMode = () => {
  return {
    type: TOGGLE_MODE
  }
}

export const signup = (user) => async dispatch => {
  return axios.post(`${url}/signup`, user).then(res => {
    // extract user data and token
    let token = res.data.split('{')[0]
    token = token.replaceAll('"', '')
    const userData = JSON.parse(`{${res.data.split('{')[1]}`)

    localStorage.setItem('token', token)
    localStorage.setItem('userId', userData.ID)

    // save user data and token in state
    dispatch({ type: SET_USER, data: userData })
    dispatch({ type: SET_TOKEN, data: token })
  }).catch(err => {
    console.log(err)
  })
}

export const login = (user) => async dispatch => {
  return axios.post(`${url}/login`, user).then(res => {
    // extract user data and token
    let token = res.data.split('{')[0]
    token = token.replaceAll('"', '')
    const userData = JSON.parse(`{${res.data.split('{')[1]}`)

    localStorage.setItem('token', token)
    localStorage.setItem('userId', userData.ID)

    // save user data and token in state
    dispatch({ type: SET_USER, data: userData })
    dispatch({ type: SET_TOKEN, data: token })
  }).catch(err => {
    console.log(err)
  })
}

export const getUser = (userId) => async dispatch => {
  return axios.get(`${url}/getuser/${userId}`).then(res => {
    dispatch({ type: SET_USER, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const updateStudent = (userId, user) => async dispatch => {
  return axios.post(`${url}/updatestudent/${userId}`, user).then(res => {
    dispatch({ type: SET_USER, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token
  }
}

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN
  }
}

export const getTracks = () => async dispatch => {
  return axios.get(`${url}/getalltracks`).then(res => {
    dispatch({ type: SET_TRACKS, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const addTrack = (track) => async dispatch => {
  return axios.post(`${url}/addTrack`, track).then(async (res) => {
    dispatch({ type: ADD_TRACK, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const createProfile = (user_id, track_id, completed_skills) => async dispatch => {
  return axios.post(`${url}/createprofile/${user_id}`, { track_id, completed_skills, level: completed_skills.length }).then(async (res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    dispatch({ type: SET_CURRENT_PROFILE, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const getCurrentProfile = (user_id) => async dispatch => {
  return axios.get(`${url}/getcurrentprofile/${user_id}`).then(async (res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    dispatch({ type: SET_CURRENT_PROFILE, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const getCurrentTrack = (track_id) => async dispatch => {
  return axios.get(`${url}/gettrack/${track_id}`).then(res => {
    dispatch({ type: SET_CURRENT_TRACK, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const getProfiles = (user_id) => async dispatch => {
  return axios.get(`${url}/getallprofiles/${user_id}`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_PROFILES, data: res.data })
    } else {
      await dispatch({ type: SET_PROFILES, data: [] })
    }
  }).catch(err => {
    console.log(err)
  })
}

export const removeProfile = (user_id, profile_id) => async dispatch => {
  return axios.delete(`${url}/deleteprofile/${user_id}`, { data: { profile_id } }).then(async (res) => {
    await dispatch({ type: REMOVE_PROFILE, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const switchProfile = (user_id, profile_id) => async dispatch => {
  return axios.post(`${url}/switchprofile/${user_id}`, { profile_id }).then(async (res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    await dispatch({ type: SET_CURRENT_PROFILE, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const getNotAcceptedMentors = () => async dispatch => {
  return axios.get(`${url}/getnotacceptedmentors`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_NOT_ACCEPTED_MENTORS, data: res.data })
    } else {
      await dispatch({ type: SET_NOT_ACCEPTED_MENTORS, data: [] })
    }
  }).catch(err => {
    console.log(err)
  })
}

export const getAcceptedMentors = () => async dispatch => {
  return axios.get(`${url}/getacceptedmentors`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_ACCEPTED_MENTORS, data: res.data })
    } else {
      await dispatch({ type: SET_ACCEPTED_MENTORS, data: [] })
    }
  }).catch(err => {
    console.log(err)
  })
}

export const acceptMentor = (mentor_email) => async dispatch => {
  return axios.post(`${url}/acceptmentor`, { email: mentor_email }).then(async (res) => {
    await dispatch({ type: ADD_ACCEPTED_MENTOR, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const removeMentor = (user_id) => async dispatch => {
  return axios.delete(`${url}/removementor/${user_id}`).then((res) => {
  }).catch(err => {
    console.log(err)
  })
}

export const reportMentor = ({ message, session_id }) => async dispatch => {
  return axios.post(`${url}/reportmentor`, { message, session_id }).then((res) => {
  }).catch(err => {
    console.log(err)
  })
}
