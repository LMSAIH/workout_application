import { Link, useLocation } from "react-router-dom";
import logo from "../images/exercise-svgrepo-com.svg";
const NavBar = () => {

    const location = useLocation();

  return (
    <header>
      <nav>
        <div className="container">
          <div className="logoContainer">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
              Work.io
            </Link>
          </div>
          <div className="links">
            <ul className = "linkList">
                <li className={location.pathname === "/" ? "active" : "link"} ><Link to = "/">Home</Link></li>
                <li className={location.pathname === "/login" ? "active" : "link"}><Link to = "/login">login</Link></li>
                <li className={location.pathname === "/signup" ? "active" : "link"}><Link to = "/signup">signup</Link></li>
                <li className={location.pathname === "/ThisWeek" ? "active" : "link"}><Link to = "/ThisWeek">ThisWeek</Link></li>
                <li className={location.pathname === "/Information" ? "active" : "link"}><Link to = "/Information">Information</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
