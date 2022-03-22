
import Sidebar from "../../layout/Sidebar"
import Header from "../../layout/Header"
import { useSelector } from 'react-redux';

export const Home = () => {
    const sidebar = useSelector(state => state.sidebar);

    return (
        <div className="grey-bg h-100">
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <div className="purple-bg p-5 pt-4">
                    Current Profile:
                </div>
                <div className="p-5">
                    Content
                </div>
            </div>
        </div>
    )
}

