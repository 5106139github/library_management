import { Link } from 'react-router-dom'
import '../../src/assets/styles/navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
           <div className="logo">
            <img src={logo} alt=""/>
            </div>
           <div className='links'>
           <ul>
                <li>
                    <Link to='/adminportal/'>HOME</Link>
                </li>
                <li>
                    <Link to='/adminportal/books/'>BOOKS</Link>
                </li>
                <li>
                    <Link>ADD BOOKS</Link>
                </li>
                <li>
                    <Link>USERS</Link>
                </li>
                <li>
                    <Link>ADD USERS</Link>
                </li>
                <li>
                    <Link>CONTACT</Link>
                </li>
                <li>
                    <Link>LOGOUT</Link>
                </li>
            </ul>
           </div>
        </div>
    </>
  )
}

export default Navbar
