import React from "react";
import "./CustomNewsCard.css";
import CustomHeading from "../CustomHeading/CustomHeading";
const CustomNewsCard = ({
  imageURL,
  location,
  title,
  date,
}: {
  imageURL: string;
  location: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="news-card-wrapper">
      <img className="image-wrapper" src={imageURL} alt="news" />

      <div className="news-headline-wrapper">
        <CustomHeading headingLevel="h3" className="no-margin">
          {title}
        </CustomHeading>
        <CustomHeading headingLevel="h6" className="no-margin">
          {date}
        </CustomHeading>
      </div>
    </div>
  );
};

export default CustomNewsCard;
