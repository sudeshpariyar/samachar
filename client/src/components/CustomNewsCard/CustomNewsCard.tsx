import React from "react";
import "./CustomNewsCard.css";
import CustomHeading from "../CustomHeading/CustomHeading";
import { INewsData } from "../../pages/homePage/HomePage";
import { useNavigate } from "react-router-dom";
import CustomTimeAgo from "../CustomTimeAgo/CustomTimeAgo";
import CustomCountryName from "../CustomCountryName/CustomCountryName";

const CustomNewsCard = ({ newsData }: { newsData: INewsData }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const news = newsData;
    navigate(`/blog/${newsData.article_id}`, { state: { news } });
  };
  return (
    <div className="news-card-wrapper">
      {newsData.image_url ? (
        <img
          className="image-wrapper"
          src={newsData.image_url}
          alt="news"
          onClick={handleClick}
        />
      ) : (
        <div className="news-card-image-not-found" onClick={handleClick}>
          image not found
        </div>
      )}

      <div className="news-headline-wrapper">
        <CustomHeading headingLevel="h4" className="no-margin">
          {newsData.title}
        </CustomHeading>
        <CustomHeading headingLevel="h6" className="no-margin country-and-date">
          <CustomCountryName country={newsData.country[0]} />
          ,
          <CustomTimeAgo date={newsData.pubDate as Date} />
        </CustomHeading>
      </div>
    </div>
  );
};

export default CustomNewsCard;
