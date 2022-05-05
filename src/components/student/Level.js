import { useSelector } from 'react-redux';

const Level = (props) => {
    const lock = <i className="fa fa-lock"></i>
    const darkmode = useSelector(state => state.darkmode);
    return (
        <div className={`level ${props.unlocked ? `unlocked` : ""} ${darkmode ? "dark-level" : ""}`}>
            {props.unlocked ? props.index + 1 : lock}
        </div>
    )
}

export default Level;