import Linkedin from '../../assets/linkedin.png'

const Job = () => {
  return (
        <div className="row mb-5 pb-2 mx-1">
            <div className="col-1 d-flex align-items-center justify-content-center">
                <div>
                    <img src={Linkedin} alt="Linkedin logo" height={60} width={100} />
                </div>
            </div>
            <div className="col px-4">
                <div className="row mx-1 fw-bold">
                    Job Title - Location
                </div>
                <div className="row mx-1">
                    Company Name
                </div>
                <div className="row mx-1 fw-light d-inline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat lobortis sodales.
                Pellentesque consequat eget diam id consequat. Duis vel augue aliquam, pellentesque velit ut,
                 maximus neque... <a className="red-link" href="https://google.com"> Read more</a>
                </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center mt-4">
                <button className="btn-purple">Apply</button>
            </div>
        </div>
  )
}

export default Job
