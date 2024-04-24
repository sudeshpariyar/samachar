import React, { useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../../components/Search/Search";
import useWindowWidthAndHeight from "../../customHooks/useWindowWidthAndHeight";
import CustomButton from "../../components/CustomButton/CustomButton";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [width, height] = useWindowWidthAndHeight();
  const handleClick = () => {
    if (width < 756) {
      setShowSideNav(false);
    }
    setModalDisplay(!modalDisplay);
  };

  const handleNavClick = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">Samachar</Link>
      </div>
      {width > 750 ? (
        <div className="header__navbar__wrapper">
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
          </div>
        </div>
      ) : (
        <div>
          {showSideNav ? (
            <CustomButton
              className="header__mobile__button"
              onClick={handleNavClick}
            >
              <IoMdClose />
            </CustomButton>
          ) : (
            <CustomButton
              className="header__mobile__button"
              onClick={handleNavClick}
            >
              <GiHamburgerMenu />
            </CustomButton>
          )}
        </div>
      )}
      {width < 750 && showSideNav && (
        <div className="mobile__navbar__wrapper">
          <div className="mobile__nav__section">
            <Link onClick={() => setShowSideNav(false)} to="/sports">
              Sports
            </Link>
            <Link onClick={() => setShowSideNav(false)} to="/health">
              Health
            </Link>
            <Link onClick={() => setShowSideNav(false)} to="/political">
              Political
            </Link>
            <Link onClick={() => setShowSideNav(false)} to="/business">
              Business
            </Link>
            <Link onClick={() => setShowSideNav(false)} to="/science">
              Science
            </Link>
            <Link onClick={() => setShowSideNav(false)} to="/entertainment">
              Entertainment
            </Link>
          </div>
          <div className="header-right-section">
            <div className="search-icon" onClick={handleClick}>
              <FiSearch />
            </div>
          </div>
        </div>
      )}

      {modalDisplay && (
        <Search openModal={modalDisplay} setModalDisplay={setModalDisplay} />
      )}
    </div>
  );
};

export default Header;
