import React from "react";
import "./Footer.css";
import ComponentWrapper from "../../components/ComponentWrapper/ComponentWrapper";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = {
    query: "",
  };
  const handleClick = (value: string) => {
    data.query = value;
  };
  return (
    <div className="footer-wrapper">
      <ComponentWrapper>
        <div className="footer-content-wrapper">
          <div className="">
            <CustomHeading headingLevel="h2">Samachar</CustomHeading>
            <span>
              This is the Samachar whrre you can find the different news abou
              all the things happening all around the world.
            </span>
          </div>
          <div className="footer-right-component">
            <div>
              <CustomHeading headingLevel="h4">World</CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link to="/political">Politics</Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link to="/health">Health</Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link to="/business">Business</Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link to="/entertainment">Entertainment</Link>
              </CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Tech</CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link to="/science">Science</Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("magazines")}
                  to="/search"
                  state={data}
                >
                  Magazines
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("start up")}
                  to="/search"
                  state={data}
                >
                  Start up
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("crypto")}
                  to="/search"
                  state={data}
                >
                  Crypto
                </Link>
              </CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Life</CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("food")}
                  to="/search"
                  state={data}
                >
                  Food
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("Style")}
                  to="/search"
                  state={data}
                >
                  Style
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link to="/sports">Sports</Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("Movie")}
                  to="/search"
                  state={data}
                >
                  Movie
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("Music")}
                  to="/search"
                  state={data}
                >
                  Music
                </Link>
              </CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Magezine</CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("Fashion")}
                  to="/search"
                  state={data}
                >
                  Fashion
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("Blogger")}
                  to="/search"
                  state={data}
                >
                  Blogger
                </Link>
              </CustomHeading>
              <CustomHeading headingLevel="h6">
                <Link
                  onClick={() => handleClick("People")}
                  to="/search"
                  state={data}
                >
                  People
                </Link>
              </CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Other</CustomHeading>
              <CustomHeading headingLevel="h6">About</CustomHeading>
              <CustomHeading headingLevel="h6">Contact us</CustomHeading>
              <CustomHeading headingLevel="h6">
                Terms & Conditions
              </CustomHeading>
            </div>
          </div>
        </div>
        <hr />
        <CustomHeading headingLevel="h5">
          Copyright <FaRegCopyright /> All Rights Reserved
        </CustomHeading>
      </ComponentWrapper>
    </div>
  );
};

export default Footer;
