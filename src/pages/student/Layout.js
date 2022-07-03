import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import Spinner from "../../components/common/Spinner";

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

const Layout = ({ children, darkmode, sidebar, spinner, pageName }) => {
    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | {pageName}</title>
            </Helmet>
            {spinner ? <Spinner /> : <></>}
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                { children }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        sidebar: state.sidebar,
        darkmode: state.darkmode,
    }
}

export default connect(mapStateToProps)(Layout);