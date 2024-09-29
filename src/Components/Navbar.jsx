import { Link, useLocation } from "react-router-dom";
import "../../src/assets/styles/navbar.css";
import logo from "../assets/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  let location = useLocation();
  let path = location.pathname;
  let bool = path.startsWith("/adminportal");
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          {bool ? 
            <ul>
              <li>
                <Link to="/adminportal/">HOME</Link>
              </li>
              <li>
                <Link to="/adminportal/books/">BOOKS</Link>
              </li>
              <li>
                <Link to="/adminportal/addbooks">ADD BOOKS</Link>
              </li>
              <li>
                <Link to="/adminportal/users">USERS</Link>
              </li>
              <li>
                <Link to="/adminportal/addusers">ADD USERS</Link>
              </li>
              <li>
                <Link to="/adminportal/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/">LOGOUT</Link>
              </li>
            </ul>
           : 
            <ul>
              <li>
                <Link to="/userportal/">HOME</Link>
              </li>
              <li>
                <Link to="/userportal/books">BOOKS</Link>
              </li>
              <li>
                <Link to="/userportal/users">USERS</Link>
              </li>
              <li>
                <Link to="/userportal/contact">CONTACT</Link>
              </li>
              <li>
                <Link to='/userportal/cart'>
                  <ShoppingCartIcon />
                </Link>
              </li>

              <li>
                <Link to="/">LOGOUT</Link>
              </li>
            </ul>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
