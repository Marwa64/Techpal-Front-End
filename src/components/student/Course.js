import StarRatingComponent from 'react-star-rating-component';

const Course = ({ course, enrolled }) => {
    return (
        <div className="col-4 course px-5 mx-4">
            <img src={course.img} height="150px" width="240px" alt="recommended course cover" /> 
            <div className="row mt-3">
                <span className='black'>{ course.name }</span>
            </div>
            <div className="row mt-1">
                <div className="col-12">
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={course.rating}
                    />
                </div>
            </div>
            <div className="row" style={{marginTop: '-15px'}}>
                <a class="red-link" href={course.link}>
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 7.551 6.325">
                        <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M3.21,3.071l.374-.322a.451.451,0,0,1,.571,0L7.432,5.564a.313.313,0,0,1,0,.491L4.156,8.87a.451.451,0,0,1-.571,0L3.21,8.549a.315.315,0,0,1,.007-.5L5.248,6.389H.4A.378.378,0,0,1,0,6.042V5.578A.378.378,0,0,1,.4,5.23H5.248L3.217,3.568A.313.313,0,0,1,3.21,3.071Z" transform="translate(0 -2.647)" fill="#f03939"/>
                    </svg>

                </a>
            </div>
            {enrolled ? 
                    <div className="row mt-4">
                        <div className="col-10">
                            <button class="btn-purple">Mark as Completed</button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 9.204 10.277">
                                    <path id="Icon_awesome-trash" data-name="Icon awesome-trash" d="M8.875.642H6.41L6.217.267A.494.494,0,0,0,5.775,0H3.427a.489.489,0,0,0-.44.267L2.794.642H.329A.325.325,0,0,0,0,.963v.642a.325.325,0,0,0,.329.321H8.875A.325.325,0,0,0,9.2,1.606V.963A.325.325,0,0,0,8.875.642ZM1.093,9.373a.977.977,0,0,0,.984.9h5.05a.977.977,0,0,0,.984-.9l.436-6.8H.657Z" fill="#fff"/>
                                </svg>
                            </button>
                        </div>
                    </div>
            :
                    <div className="row mt-4">
                        <button class="btn-purple mx-3">Enroll</button>
                    </div>
        }
        </div>
    )
}

export default Course;