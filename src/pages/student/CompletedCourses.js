import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import { getCompletedCourses } from '../../store/actions'

import Course from '../../components/student/Course'

import { connect, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

const CompletedCourses = ({ currentTrack, currentProfile, completedCourses }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)

  useEffect(async () => {
    if (completedCourses.length < 1) {
      setSpinner(true)
      await dispatch(getCompletedCourses(currentProfile.ID))
      setSpinner(false)
    }
  }, [])

  return (
        <Layout spinner={spinner} pageName='Completed Courses'>
            <PurpleBar title={`Completed Courses in ${currentTrack.name}`} button={true} buttonName="View Recommendations" path="/courses" />
            <div className="container">
                <div className="row p-5">
                    <h5>Your Completed Courses</h5>
                </div>
                <div className="row">
                    {completedCourses.map(course => {
                      return (
                            <Course key={course.id} course={course} enrolled={true}/>
                      )
                    })}
                </div>
            </div>
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    currentTrack: state.currentTrack,
    currentProfile: state.currentProfile,
    completedCourses: state.completedCourses
  }
}

export default connect(mapStateToProps)(CompletedCourses)
