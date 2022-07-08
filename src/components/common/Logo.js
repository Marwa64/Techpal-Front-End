import LogoImg from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='header-logo d-flex align-items-center justify-content-center px-3'>
        <img className="logo me-1" src={LogoImg} alt="logo" />
        <h2 className='logo-title mt-2'>TechPal</h2>
    </div>
  )
}

export default Logo
