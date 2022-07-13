import Navbar from '../../components/common/Navbar'
import { Helmet } from 'react-helmet'

const ApplicationSent = () => {
  return (
        <div className="login lightpurple-bg p-4">
                <Helmet>
                    <title>TechPal | Application Sent </title>
                </Helmet>
                <Navbar />
                <div className="container rounded mt-5">
                    <div className="row pt-5">
                        <div className='col col-md-8 m-auto shadow text-center white-block p-5 pb-4'>
                            <h2 className="mb-4">Mentor Application Received</h2>
                            <p className="mb-5">Thank you for applying, we appreciate your interest to be part of the TechPal Community!<br/>
                            We will let you know the outcome of your application within a week</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}
export default ApplicationSent
