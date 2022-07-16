import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import Course from '../../components/student/Course'
import RateCourseModal from '../../components/student/RateCourseModal'
import { enrollCourse, completeCourse, rateCourse, getCourses, getEnrolledCourses } from '../../store/actions'

import { connect, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

const Courses = ({ user, currentTrack, currentProfile, courses, enrolledCourses }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)
  const [viewRate, setViewRate] = useState(false)
  const [selectedCourse, setCourse] = useState(null)

  const openRateModal = (course) => {
    setCourse(course)
    setViewRate(true)
  }

  const enroll = async (courseID) => {
    setSpinner(true)
    const payload = {
      profile_id: currentProfile.ID,
      user_id: user.ID,
      course_id: courseID,
      completed: false
    }
    await dispatch(enrollCourse(payload))
    await dispatch(getEnrolledCourses(currentProfile.ID))
    setSpinner(false)
  }

  const complete = async (courseID) => {
    setSpinner(true)
    const payload = {
      profile_id: currentProfile.ID,
      course_id: courseID
    }
    await dispatch(completeCourse(payload))
    setSpinner(false)
  }

  const rate = async (courseID, rating) => {
    setSpinner(true)
    const payload = {
      user_id: user.ID,
      course_id: courseID,
      rating
    }
    await dispatch(rateCourse(payload))
    await complete(courseID)
    await dispatch(getEnrolledCourses(currentProfile.ID))
    setSpinner(false)
  }

  useEffect(async () => {
    setSpinner(true)
    const remainingSkills = []
    Object.keys(currentTrack.skills).forEach(skill => {
      if (!currentProfile.completed_skills.includes(skill)) {
        remainingSkills.push(skill)
      }
    })
    const payload = {
      user_id: user.ID,
      skill: remainingSkills[0]
    }
    if (enrolledCourses.length < 1) {
      await dispatch(getEnrolledCourses(currentProfile.ID))
    }
    if (courses.length < 1) {
      await dispatch(getCourses(payload))
    }
    setSpinner(false)
  }, [])

  return (
        <Layout spinner={spinner} pageName='Courses'>
            <PurpleBar title={`Course Recommendations for ${currentTrack.name}`} button={true} buttonName="View Completed Courses" path="/completed-courses" />
            <div className="container">
                <div className="row p-5">
                    <h5>Your Currently Enrolled Courses</h5>
                </div>
                <div className="row">
                    {enrolledCourses.map(course => {
                      return (
                        <Course
                          key={course.course_id}
                          course={course}
                          enrolled={true}
                          openRateModal={openRateModal}
                        />
                      )
                    })}
                </div>
                <div className="row p-5">
                    <h5>Course Recommendations For You</h5>
                </div>
                <div className="row">
                    {courses.map(course => {
                      return (
                        <Course
                          key={course.course_id}
                          course={course}
                          enrolled={false}
                          enroll={enroll}
                        />
                      )
                    })}
                </div>
            </div>
            <RateCourseModal
              show={viewRate}
              handleClose={() => setViewRate(false)}
              course={selectedCourse}
              rate={rate}
            />
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    currentTrack: state.currentTrack,
    currentProfile: state.currentProfile,
    courses: state.courses,
    enrolledCourses: state.enrolledCourses
  }
}

export default connect(mapStateToProps)(Courses)
