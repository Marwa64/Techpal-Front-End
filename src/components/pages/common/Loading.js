import Spinner from "../../layout/Spinner";
import { Helmet } from 'react-helmet';

const Loading = () => {
    return (
        <div className="loading-page">
            <Helmet>
                <title>Loading..</title>
            </Helmet>
            <Spinner />
        </div>
    )
}

export default Loading;