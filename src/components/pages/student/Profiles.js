import Sidebar from "../../layout/Sidebar"
import Header from "../../layout/Header"
import { useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';

const Profiles = () => {
    const sidebar = useSelector(state => state.sidebar);
    return (
        <div className="grey-bg">
            <Helmet>
                <title>Profiles | Career Guidance</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
            </div>
        </div>
    )
}

export default Profiles