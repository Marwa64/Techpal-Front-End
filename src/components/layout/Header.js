import Avatar from "../../assets/avatar.jpg"
import { Dropdown } from "react-bootstrap"
import { toggleSidebar, toggleMode } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const name = "Marwa Omar"
    const dispatch = useDispatch();
    const darkmode = useSelector(state => state.darkmode);

    return (
        <div className={`header d-flex justify-content-between p-3 pe-4 ${darkmode ? "header-dark" : ""}`}>
            <button className="btn" onClick={() => dispatch(toggleSidebar())}><li className="fa fa-bars purple"></li></button>
            <div>
                <button className="btn me-3" onClick={() => dispatch(toggleMode())}><li className={`fa fa-moon-o ${darkmode ? "white" : ""}`}></li></button>
                <Dropdown>
                    <Dropdown.Toggle variant="info">
                        <span className={`me-3 ${darkmode ? "header-dark" : ""}`}>
                            <img className="profile-pic me-2" src={Avatar} alt="avatar" />
                            <span className="px-1 pe-0">{name}</span>
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/account">Account</Dropdown.Item>
                        <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header;