import Avatar from "../../assets/avatar.jpg"
import { Dropdown } from "react-bootstrap"
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const name = "Marwa Omar"
    const dispatch = useDispatch();

    return (
        <div className="header d-flex justify-content-between p-3 pe-4 me-2">
            <button className="btn" onClick={() => dispatch(toggleSidebar())}><li className="fa fa-bars purple"></li></button>
            <div>
                <button className="btn me-3"><li className="fa fa-moon-o"></li></button>
                <Dropdown>
                    <Dropdown.Toggle variant="info">
                        <span className="me-3">
                            <img className="profile-pic me-2" src={Avatar} alt="avatar" />
                            {name}
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