import axios from 'axios'
import { DefaultResume } from '../../components/student/defaultResume'

import {
  TOGGLE_SIDEBAR, TOGGLE_MODE, SET_USER,
  SET_TOKEN, REMOVE_TOKEN, SET_TRACKS,
  SET_CURRENT_PROFILE, SET_CURRENT_TRACK,
  SET_PROFILES, REMOVE_PROFILE, ADD_TRACK,
  SET_ACCEPTED_MENTORS, ADD_ACCEPTED_MENTOR,
  SET_NOT_ACCEPTED_MENTORS, SET_NEWS, REMOVE_TRACK,
  SET_RESUME
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
  return axios.post(`${url}/signup`, user).then(async (res) => {
    // extract user data and token
    let token = res.data.split('{')[0]
    token = token.replaceAll('"', '')
    const userData = JSON.parse(`{${res.data.split('{')[1]}`)

    localStorage.setItem('token', token)
    localStorage.setItem('userId', userData.ID)

    // save user data and token in state
    await dispatch({ type: SET_USER, data: userData })
    await dispatch({ type: SET_TOKEN, data: token })
  }).catch(err => {
    console.log(err)
  })
}

export const login = (user) => async dispatch => {
  return axios.post(`${url}/login`, user).then(async (res) => {
    // extract user data and token
    let token = res.data.split('{')[0]
    token = token.replaceAll('"', '')
    const userData = JSON.parse(`{${res.data.split('{')[1]}`)

    localStorage.setItem('token', token)
    localStorage.setItem('userId', userData.ID)

    // save user data and token in state
    await dispatch({ type: SET_USER, data: userData })
    await dispatch({ type: SET_TOKEN, data: token })
    await dispatch(getProfiles(userData.ID))
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

export const logout = () => async dispatch => {
  await dispatch({ type: REMOVE_TOKEN })
  await dispatch({ type: SET_USER, data: {} })
  await dispatch({ type: SET_PROFILES, data: [] })
  await dispatch({ type: SET_RESUME, data: {} })
  await dispatch({ type: SET_CURRENT_TRACK, data: {} })
  await dispatch({ type: SET_CURRENT_PROFILE, data: {} })
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

export const removeTrack = (track_id) => async dispatch => {
  return axios.delete(`${url}/deletetrack`, { data: { track_id } }).then(async (res) => {
    dispatch({ type: REMOVE_TRACK, data: track_id })
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
      return res.data
    } else {
      await dispatch({ type: SET_PROFILES, data: [] })
      return []
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

export const applyMentor = (mentor) => async dispatch => {
  return axios.post(`${url}/applymentor`, mentor).then(async (res) => {
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

export const getResume = (profile_id) => async dispatch => {
  if (profile_id) {
    return axios.get(`${url}/getresume/${profile_id}`).then(async (res) => {
      if (!res.data.leftorder) {
        await dispatch({ type: SET_RESUME, data: DefaultResume })
      } else {
        await dispatch({ type: SET_RESUME, data: res.data })
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const addResume = (profile_id, resume) => async dispatch => {
  return axios.post(`${url}/addresume`, {
    profile_id,
    template: resume.template,
    leftorder: resume.leftorder,
    rightorder: resume.rightorder
  }).then(res => {
    dispatch({ type: SET_RESUME, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const updateResume = (profile_id, resume) => async dispatch => {
  return axios.post(`${url}/updateresume/${profile_id}`, resume).then(res => {
    dispatch({ type: SET_RESUME, data: res.data })
  }).catch(err => {
    console.log(err)
  })
}

export const getNews = (track_name, numberOfArticles) => async dispatch => {
  const API_URL = 'https://newsapi.org/v2/everything?apiKey=4c815a8efe264f8ba724edc7b68523d6&language=en&sortBy=publishedAt'
  return axios.get(`${API_URL}&pageSize=${numberOfArticles}&q=${track_name}`).then(async (res) => {
    await dispatch({ type: SET_NEWS, data: res.data.articles })
  }).catch(err => {
    console.log(err)
  })
}
