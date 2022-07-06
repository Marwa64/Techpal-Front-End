import Navbar from '../../components/common/Navbar'
import { Helmet } from 'react-helmet'

const ApplicationSent = () => {
  return (
        <div className="login lightpurple-bg p-4">
                <Helmet>
                    <title>TechPal | Application As Mentor Sent </title>
                </Helmet>
                <Navbar />
                <div className="container text-muted ">
                    <div className="row pt-5  pb-5 ">
                        <div className='col col-md-8 m-auto bg-white  rounded-3 shadow-lg text-center p-5 '>
                            <h1 className=" h1  mb-5">Mentor Application Received</h1>
                            <p className="mb-5">We appreciate your interest to be one of <br/>
                            <span className=' purple'> TechPal Community.</span><br/>
                            Thank you, we will let you know the outcome of your application after 2 weeks</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}
export default ApplicationSent
