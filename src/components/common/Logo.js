import LogoImg from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Logo = ({ path }) => {
  return (
    <NavLink to={path} className='header-logo d-flex align-items-center justify-content-center px-3'>
        <img className="logo me-1" src={LogoImg} alt="logo" />
        <h2 className='logo-title mt-2'>TechPal</h2>
    </NavLink>
  )
}

export default Logo
