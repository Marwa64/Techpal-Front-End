import { Helmet } from 'react-helmet'
import Navbar from '../../components/common/Navbar'
import ContactUs from '../../components/common/ContactUs'
const Contact = () => {
  return (
    <div className="lightpurple-bg login">
    <div className="container-fluied py-4" >
        <Helmet>
            <title>TechPal  | Home</title>
        </Helmet>
        <Navbar />
        <ContactUs/>
    </div>
</div>

  )
}

export default Contact
