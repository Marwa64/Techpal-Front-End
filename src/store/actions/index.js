import axios from 'axios'
import { DefaultResume } from '../../components/student/defaultResume'

import {
  TOGGLE_SIDEBAR, TOGGLE_MODE, SET_USER,
  SET_TOKEN, REMOVE_TOKEN, SET_TRACKS,
  SET_CURRENT_PROFILE, SET_CURRENT_TRACK,
  SET_PROFILES, REMOVE_PROFILE, ADD_TRACK,
  SET_ACCEPTED_MENTORS, ADD_ACCEPTED_MENTOR,
  SET_NOT_ACCEPTED_MENTORS, SET_NEWS, REMOVE_TRACK,
  SET_RESUME, DISPLAY_MESSAGE, REMOVE_MESSAGE,
  SET_JOBS, SET_SESSIONS, ADD_SESSION, REMOVE_SESSION,
  SET_COURSES, SET_ENROLLED_COURSES, SET_COMPLETED_COURSES,
  SET_SKILLS, SET_LEADERBOARD, SET_USERS
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

export const removeMessage = () => {
  return {
    type: REMOVE_MESSAGE
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
    return true
  }).catch((err) => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
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
    await dispatch({ type: SET_TOKEN, data: token })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Login Success', error: false } })

    await dispatch(getUser(userData.ID))
    return true
  }).catch(err => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    return false
  })
}

export const getAllUsers = () => async dispatch => {
  return axios.get(`${url}/getallusers`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_USERS, data: res.data })
      return res.data
    } else {
      await dispatch({ type: SET_USERS, data: [] })
      return []
    }
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getUser = (userId) => async dispatch => {
  return axios.get(`${url}/getuser/${userId}`).then(res => {
    dispatch({ type: SET_USER, data: res.data })
    return res.data
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const updateStudent = (userId, user) => async dispatch => {
  return axios.post(`${url}/updatestudent/${userId}`, user).then(async (res) => {
    await dispatch(getUser(userId))
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Data Updated Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const updateMentor = (userId, user) => async dispatch => {
  return axios.post(`${url}/updatementor/${userId}`, user).then(async (res) => {
    await dispatch(getUser(userId))
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Data Updated Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const changePassword = (userId, payload) => async dispatch => {
  return axios.post(`${url}/changementorpassword/${userId}`, payload).then(async (res) => {
    await dispatch(getUser(userId))
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Password Changed Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
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

export const getSkills = () => async dispatch => {
  return axios.get(`${url}/getallskills`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_SKILLS, data: res.data })
      return res.data
    } else {
      await dispatch({ type: SET_SKILLS, data: [] })
      return []
    }
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const addSkill = (skill) => async dispatch => {
  return axios.get(`${url}/addskill/${skill}`).then(async (res) => {
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Skill Added Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getTracks = () => async dispatch => {
  return axios.get(`${url}/getalltracks`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_TRACKS, data: res.data })
      return res.data
    } else {
      await dispatch({ type: SET_TRACKS, data: [] })
      return []
    }
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const addTrack = (track) => async dispatch => {
  return axios.post(`${url}/addTrack`, track).then(async (res) => {
    dispatch({ type: ADD_TRACK, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Track Added Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const removeTrack = (track_id) => async dispatch => {
  return axios.delete(`${url}/deletetrack`, { data: { track_id } }).then(async (res) => {
    await dispatch({ type: REMOVE_TRACK, data: track_id })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Track Removed Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const createProfile = (user_id, track_id, completed_skills) => async dispatch => {
  return axios.post(`${url}/createprofile/${user_id}`, { track_id, completed_skills, level: completed_skills.length }).then(async (res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    await dispatch({ type: SET_CURRENT_PROFILE, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Profile Created Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getCurrentProfile = (user_id) => async dispatch => {
  return axios.get(`${url}/getcurrentprofile/${user_id}`).then(async (res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    dispatch({ type: SET_CURRENT_PROFILE, data: res.data })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getCurrentTrack = (track_id) => async dispatch => {
  return axios.get(`${url}/gettrack/${track_id}`).then(res => {
    dispatch({ type: SET_CURRENT_TRACK, data: res.data })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
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
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return []
  })
}

export const getLeaderboard = (track_id) => async dispatch => {
  return axios.get(`${url}/leadershipboard/${track_id}`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_LEADERBOARD, data: res.data })
      return res.data
    } else {
      await dispatch({ type: SET_LEADERBOARD, data: [] })
      return []
    }
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return []
  })
}

export const removeProfile = (user_id, profile_id) => async dispatch => {
  return axios.delete(`${url}/deleteprofile/${user_id}`, { data: { profile_id } }).then(async (res) => {
    await dispatch({ type: REMOVE_PROFILE, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Profile Removed Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const switchProfile = (user_id, profile_id) => async dispatch => {
  return axios.post(`${url}/switchprofile/${user_id}`, { profile_id }).then(async (res) => {
    await dispatch(getCurrentTrack(res.data.Track_id))
    await dispatch({ type: SET_CURRENT_PROFILE, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Profile Switched Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const applyMentor = (mentor) => async dispatch => {
  return axios.post(`${url}/applymentor`, mentor).then(() => {
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getNotAcceptedMentors = () => async dispatch => {
  return axios.get(`${url}/getnotacceptedmentors`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_NOT_ACCEPTED_MENTORS, data: res.data })
    } else {
      await dispatch({ type: SET_NOT_ACCEPTED_MENTORS, data: [] })
    }
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getAcceptedMentors = () => async dispatch => {
  return axios.get(`${url}/getacceptedmentors`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_ACCEPTED_MENTORS, data: res.data })
    } else {
      await dispatch({ type: SET_ACCEPTED_MENTORS, data: [] })
    }
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const acceptMentor = (mentor_email) => async dispatch => {
  return axios.post(`${url}/acceptmentor`, { email: mentor_email }).then(async (res) => {
    await dispatch({ type: ADD_ACCEPTED_MENTOR, data: res.data })
    dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Mentor Accepted', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const removeMentor = (user_id) => async dispatch => {
  return axios.delete(`${url}/removementor/${user_id}`).then((res) => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Mentor Removed Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const reportMentor = (mentor_email, message) => async dispatch => {
  return axios.post(`${url}/reportmentor/${mentor_email}`, { message }).then((res) => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Mentor Reported Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getResume = (profile_id) => async dispatch => {
  if (profile_id) {
    return axios.get(`${url}/getresume/${profile_id}`).then(async (res) => {
      if (!res.data.leftorder) {
        await dispatch({ type: SET_RESUME, data: DefaultResume })
        return DefaultResume
      } else {
        await dispatch({ type: SET_RESUME, data: res.data })
        return res.data
      }
    }).catch(err => {
      if (err.response) {
        dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
      } else {
        dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
      }
      return false
    })
  }
}

export const addResume = (profile_id, resume) => async dispatch => {
  return axios.post(`${url}/addresume`, {
    profile_id,
    template: resume.template,
    leftorder: resume.leftorder,
    rightorder: resume.rightorder
  }).then(async (res) => {
    await dispatch({ type: SET_RESUME, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Resume Updated Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const updateResume = (profile_id, resume) => async dispatch => {
  return axios.post(`${url}/updateresume/${profile_id}`, resume).then(async (res) => {
    await dispatch({ type: SET_RESUME, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Resume Updated Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const addSession = (mentorId, session) => async dispatch => {
  return axios.post(`${url}/addsession/${mentorId}`, session).then(async (res) => {
    dispatch({ type: ADD_SESSION, data: res.data })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Session Added Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const removeSession = (session_id) => async dispatch => {
  return axios.delete(`${url}/removesession/${session_id}`).then(async (res) => {
    await dispatch({ type: REMOVE_SESSION, data: session_id })
    await dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Session Removed Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getAllSessions = () => async dispatch => {
  return axios.get(`${url}/getallsessions`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_SESSIONS, data: res.data })
    } else {
      await dispatch({ type: SET_SESSIONS, data: [] })
    }
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getMentorSessions = (mentorId) => async dispatch => {
  return axios.get(`${url}/getallsessions/${mentorId}`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_SESSIONS, data: res.data })
    } else {
      await dispatch({ type: SET_SESSIONS, data: [] })
    }
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getNews = (track_name, numberOfArticles) => async dispatch => {
  const API_URL = 'https://newsapi.org/v2/everything?apiKey=4c815a8efe264f8ba724edc7b68523d6&language=en&sortBy=publishedAt'
  return axios.get(`${API_URL}&pageSize=${numberOfArticles}&q="${track_name}"`).then(async (res) => {
    await dispatch({ type: SET_NEWS, data: res.data.articles })
  }).catch(err => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
  })
}

export const getJobs = (track_name, profile_id) => async dispatch => {
  const RECOMMENDER_API = 'http://localhost:5000'
  return axios.post(`${RECOMMENDER_API}/jobs/${track_name}`, { profile_id }).then(async (res) => {
    await dispatch({ type: SET_JOBS, data: res.data })
    return res.data
  }).catch(err => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
  })
}

export const viewJob = (profile_id, job) => async dispatch => {
  const RECOMMENDER_API = 'http://localhost:5000'
  return axios.post(`${RECOMMENDER_API}/job_viewed/${profile_id}`, job).then(async (res) => {
    return true
  }).catch(err => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    return false
  })
}

export const enrollCourse = (payload) => async dispatch => {
  return axios.post(`${url}/enroll`, payload).then(async (res) => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Course Started Successfully', error: false } })
    return true
  }).catch(() => {
    return false
  })
}

export const completeCourse = (payload) => async dispatch => {
  return axios.post(`${url}/markcompleted`, payload).then(async (res) => {
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const rateCourse = (payload) => async dispatch => {
  return axios.post(`${url}/rate`, payload).then(async (res) => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Course Rated Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getCourses = (payload) => async dispatch => {
  const RECOMMENDER_API = 'http://localhost:5000'
  return axios.post(`${RECOMMENDER_API}/course/recommend`, payload).then(async (res) => {
    await dispatch({ type: SET_COURSES, data: res.data })
    return res.data
  }).catch(err => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
  })
}

export const getEnrolledCourses = (profileId) => async dispatch => {
  return axios.get(`${url}/getenrolledcourses/${profileId}`).then(async (res) => {
    console.log(res.data)
    if (res.data) {
      await dispatch({ type: SET_ENROLLED_COURSES, data: res.data })
    } else {
      await dispatch({ type: SET_ENROLLED_COURSES, data: [] })
    }
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const getCompletedCourses = (profileId) => async dispatch => {
  return axios.get(`${url}/getcompletedcourses/${profileId}`).then(async (res) => {
    if (res.data) {
      await dispatch({ type: SET_COMPLETED_COURSES, data: res.data })
    } else {
      await dispatch({ type: SET_COMPLETED_COURSES, data: [] })
    }
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}

export const contactUs = (messageToSend) => async dispatch => {
  return axios.post(`${url}/contact`, messageToSend).then((res) => {
    dispatch({ type: DISPLAY_MESSAGE, data: { message: 'Message Sent Successfully', error: false } })
    return true
  }).catch(err => {
    if (err.response) {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.response.data.Error, error: true } })
    } else {
      dispatch({ type: DISPLAY_MESSAGE, data: { message: err.message, error: true } })
    }
    return false
  })
}
