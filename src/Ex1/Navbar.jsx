import {Link} from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Project 2</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/add">New Student</Link>
        </div>
      </nav>
    );
  }
   
export default Navbar;
