import React from "react";
import "./Header.css";
// import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">Samachar</Link>
      </div>
      <div className="header-middle-section">
        <Link to="/sports">Sports</Link>

        <Link to="/health">Health</Link>
        <Link to="/political">Political</Link>
        <Link to="/business">Business</Link>
        {/* <Link to="/finance">Finance</Link> */}
        <Link to="/science">Science</Link>
        <Link to="/entertainment">Entertainment</Link>
      </div>
      <div className="header-right-section">
        {/* <div className="search-icon">
          <FiSearch />
        </div>
        <div>Login</div>
        <div>Register</div> */}
      </div>
    </div>
  );
};

export default Header;
