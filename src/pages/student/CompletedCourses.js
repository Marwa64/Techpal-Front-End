import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import Course from '../../components/student/Course'

import { connect } from 'react-redux'

const CompletedCourses = ({ currentTrack }) => {
  const completed = [
    {
      id: '1',
      course_name: 'Master JavaScript',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com',
      completed: true
    },
    {
      id: '2',
      course_name: 'HTML & CSS',
      skill: 'HTML & CSS',
      course_url: 'https://www.google.com',
      completed: true
    }
  ]

  return (
        <Layout spinner={false} pageName='Completed Courses'>
            <PurpleBar title={`Completed Courses in ${currentTrack.name}`} button={true} buttonName="View Recommendations" path="/courses" />
            <div className="container">
                <div className="row p-5">
                    <h5>Your Completed Courses</h5>
                </div>
                <div className="row">
                    {completed.map(course => {
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
    currentTrack: state.currentTrack
  }
}

export default connect(mapStateToProps)(CompletedCourses)
