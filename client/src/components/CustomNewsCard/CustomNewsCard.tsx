import React from "react";
import "./CustomNewsCard.css";
import CustomHeading from "../CustomHeading/CustomHeading";
import { INewsData } from "../../pages/homePage/HomePage";
import ReactTimeAgo from "react-time-ago";

const CustomNewsCard = ({ newsData }: { newsData: INewsData }) => {
  return (
    <div className="news-card-wrapper">
      {newsData.image_url ? (
        <img className="image-wrapper" src={newsData.image_url} alt="news" />
      ) : (
        <div className="news-card-image-not-found">image not found</div>
      )}

      <div className="news-headline-wrapper">
        <CustomHeading headingLevel="h4" className="no-margin">
          {newsData.title}
        </CustomHeading>
        <CustomHeading headingLevel="h6">
          <ReactTimeAgo date={newsData.pubDate} locale="en-US" />
        </CustomHeading>
      </div>
    </div>
  );
};

export default CustomNewsCard;
