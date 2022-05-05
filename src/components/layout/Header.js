import Avatar from "../../assets/avatar.jpg"
import { Dropdown } from "react-bootstrap"
import { toggleSidebar, toggleMode, removeToken } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const darkmode = useSelector(state => state.darkmode);
    const user = useSelector(state => state.user);

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        dispatch(removeToken());
        navigate("/login");
    }

    return (
        <div className={`header d-flex justify-content-between p-3 pe-4 ${darkmode ? "header-dark" : ""}`}>
            <button className="btn" onClick={() => dispatch(toggleSidebar())}><svg class="purple" xmlns="http://www.w3.org/2000/svg" width="22.443" height="17.33" viewBox="0 0 22.443 17.33">
                <path id="Icon_material-sort" data-name="Icon material-sort" d="M4.5,26.33h7.481V23.442H4.5ZM4.5,9v2.888H26.943V9Zm0,10.109H19.462V16.221H4.5Z" transform="translate(-4.5 -9)" fill="#4439f0"/></svg>
            </button>
            <div>
                <button className="btn me-3" onClick={() => dispatch(toggleMode())}><li className={`fa fa-moon-o ${darkmode ? "white" : ""}`}></li></button>
                <Dropdown>
                    <Dropdown.Toggle variant="info">
                        <span className={`me-3 ${darkmode ? "header-dark" : ""}`}>
                            <img className="profile-pic me-2" src={Avatar} alt="avatar" />
                            <span className="px-1 pe-0">{user.full_name}</span>
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/account")} >Account</Dropdown.Item>
                        <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header;