import React, { useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import Search from "../../components/Search/Search";

const Header = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const handleClick = () => {
    setModalDisplay(!modalDisplay);
  };
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
        <Link to="/science">Science</Link>
        <Link to="/entertainment">Entertainment</Link>
      </div>
      <div className="header-right-section">
        <div className="search-icon" onClick={handleClick}>
          <FiSearch />
        </div>
        {/* <div>Login</div>
        <div>Register</div> */}
      </div>
      {modalDisplay && (
        <Search openModal={modalDisplay} setModalDisplay={setModalDisplay} />
      )}
    </div>
  );
};

export default Header;
