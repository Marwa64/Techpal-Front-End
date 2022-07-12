import { NavLink } from 'react-router-dom'
import LogoImg from '../../assets/logo.png'
const NotFound = () => {
  return (
    <div className="lightpurple-bg  ">
        <div className=" container">
          <div className=" row justify-content-center align-items-center  vh-100">
            <div className="col text-center">
              <h1 className='  fs-1 dark-purple fw-bolder  mb-4'>404 - Not Found</h1>

              <div className=' lh-lg  fw-bold p-3 mt-3'>
                <p ><img className="  me-3  d-inline-block" width={50} src={LogoImg} alt="logo" /> UH OH! You&apos;re lost. <br/>  The page you are looking for does not exist. How you got here is a mystery.</p>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <NavLink className=' text-white btn-purple px-5' to="/">Go Back To Home </NavLink>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default NotFound
