
const Course = ({ course, enrolled, openRateModal, enroll }) => {
  const goToCourse = () => {
    window.open(course.course_url, '_blank')
  }
  const enroll_local = event => {
    event.stopPropagation()
    enroll(course.course_id)
  }
  const complete_local = event => {
    event.stopPropagation()
    openRateModal(course)
  }
  const remove_local = event => {
    event.stopPropagation()
    console.log('remove')
  }

  return (
        <div className={`${!enrolled ? 'container' : ''} col-12 col-lg-3 mb-4 ms-lg-5`}>
            <button onClick={goToCourse} className="course pb-4 container">
                <div className="row mt-4">
                    <span className='title text-center'>{ course.course_name }</span>
                </div>
                <div className="row d-flex align-items-center mt-4 px-4">
                    <div className="col-3 sub-title ">
                        Skills:
                    </div>
                    <div className="col-4 d-flex">
                      {
                        course.skills.map((skill, index) => {
                          return (
                            <span key={`skill-${index}`} className="badge rounded-pill bg-success-light me-2">{ skill }</span>
                          )
                        })
                      }
                    </div>
                </div>
                {enrolled
                  ? <div className="d-flex flex-row justify-content-center align-items-center mt-4">
                        {
                            !course.Completed
                              ? <>
                                <button onClick={complete_local} className="btn-purple rounded me-3">Mark as Completed</button>
                                <button onClick={remove_local} className="btn btn-danger rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 9.204 10.277">
                                        <path id="Icon_awesome-trash" data-name="Icon awesome-trash" d="M8.875.642H6.41L6.217.267A.494.494,0,0,0,5.775,0H3.427a.489.489,0,0,0-.44.267L2.794.642H.329A.325.325,0,0,0,0,.963v.642a.325.325,0,0,0,.329.321H8.875A.325.325,0,0,0,9.2,1.606V.963A.325.325,0,0,0,8.875.642ZM1.093,9.373a.977.977,0,0,0,.984.9h5.05a.977.977,0,0,0,.984-.9l.436-6.8H.657Z" fill="#fff"/>
                                    </svg>
                                </button>
                            </>
                              : <></>

                        }
                    </div>
                  : <div className="d-flex flex-row justify-content-center align-items-center mt-4">
                            <button onClick={enroll_local} className="btn-purple w-100 rounded mx-3">Start</button>
                        </div>
                }
            </button>
        </div>
  )
}

export default Course
