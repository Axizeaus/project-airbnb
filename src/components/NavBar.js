import logo from '../images/logo.png'

export default function NavBar() {
  return (
    <>
      <nav> 
        <img src={logo} alt='logo' className='nav--logo' />
      </nav>
    </>
  )
}