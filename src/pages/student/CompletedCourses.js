import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import Course from '../../components/student/Course'

import { useState } from 'react'
import { connect } from 'react-redux'

const CompletedCourses = ({ currentTrack }) => {
  const [spinner, setSpinner] = useState(false)
  setSpinner(false)

  const completed = [
    {
      id: '1',
      name: 'Master JavaScript',
      rating: 4,
      link: 'https://www.google.com',
      img: 'https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png'
    }
  ]

  return (
        <Layout spinner={spinner} pageName='Completed Courses'>
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
