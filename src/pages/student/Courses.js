import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import Course from '../../components/student/Course'
import RateCourseModal from '../../components/student/RateCourseModal'

import { connect } from 'react-redux'
import { useState } from 'react'

const Courses = ({ currentTrack }) => {
  const [viewRate, setViewRate] = useState(false)
  const [selectedCourse, setCourse] = useState(null)

  const openRateModal = (course) => {
    setCourse(course)
    setViewRate(true)
  }

  const enrolled = [
    {
      id: '1',
      course_name: 'Master JavaScript',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com',
      completed: false
    },
    {
      id: '2',
      course_name: 'HTML & CSS',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com',
      completed: false
    }
  ]

  const recommendations = [
    {
      id: '1',
      course_name: 'Course 1',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com'
    },
    {
      id: '2',
      course_name: 'Course 2',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com'
    },
    {
      id: '3',
      course_name: 'Course 3',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com'
    },
    {
      id: '4',
      course_name: 'Course 4',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com'
    },
    {
      id: '5',
      course_name: 'Course 5',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com'
    },
    {
      id: '6',
      course_name: 'Course 6',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com'
    }
  ]

  return (
        <Layout spinner={false} pageName='Courses'>
            <PurpleBar title={`Course Recommendations for ${currentTrack.name}`} button={true} buttonName="View Completed Courses" path="/completed-courses" />
            <div className="container">
                <div className="row p-5">
                    <h5>Your Currently Enrolled Courses</h5>
                </div>
                <div className="row">
                    {enrolled.map(course => {
                      return (
                        <Course key={course.id} course={course} enrolled={true} openRateModal={openRateModal} />
                      )
                    })}
                </div>
                <div className="row p-5">
                    <h5>Course Recommendations For You</h5>
                </div>
                <div className="row">
                    {recommendations.map(course => {
                      return (
                        <Course key={course.id} course={course} enrolled={false} />
                      )
                    })}
                </div>
            </div>
            <RateCourseModal show={viewRate} handleClose={() => setViewRate(false)} course={selectedCourse} />
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    currentTrack: state.currentTrack
  }
}

export default connect(mapStateToProps)(Courses)
