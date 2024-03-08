import React from "react";
import "./Footer.css";
import ComponentWrapper from "../../components/ComponentWrapper/ComponentWrapper";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
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
              <CustomHeading headingLevel="h6">Politics</CustomHeading>
              <CustomHeading headingLevel="h6">Health</CustomHeading>
              <CustomHeading headingLevel="h6">Business</CustomHeading>
              <CustomHeading headingLevel="h6">Tech</CustomHeading>
              <CustomHeading headingLevel="h6">Entertainment</CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Tech</CustomHeading>
              <CustomHeading headingLevel="h6">Science</CustomHeading>
              <CustomHeading headingLevel="h6">Magazines</CustomHeading>
              <CustomHeading headingLevel="h6">Start up</CustomHeading>
              <CustomHeading headingLevel="h6">Crypto</CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Life</CustomHeading>
              <CustomHeading headingLevel="h6">Food</CustomHeading>
              <CustomHeading headingLevel="h6">Style</CustomHeading>
              <CustomHeading headingLevel="h6">Sport</CustomHeading>
              <CustomHeading headingLevel="h6">Movie</CustomHeading>
              <CustomHeading headingLevel="h6">Music</CustomHeading>
            </div>
            <div>
              <CustomHeading headingLevel="h4">Magezine</CustomHeading>
              <CustomHeading headingLevel="h6">Fashion</CustomHeading>
              <CustomHeading headingLevel="h6">Blogger</CustomHeading>
              <CustomHeading headingLevel="h6">People</CustomHeading>
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
