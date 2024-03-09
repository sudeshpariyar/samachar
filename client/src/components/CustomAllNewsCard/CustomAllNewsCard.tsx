import React from "react";
import "./CustomAllNewsCard.css";
import { INewsData } from "../../pages/homePage/HomePage";
import CustomHeading from "../CustomHeading/CustomHeading";
import CustomButton from "../CustomButton/CustomButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

const CustomAllNewsCard = ({ news }: { news: INewsData }) => {
  let updatedNewsDescription;
  if (news.description?.length > 150) {
    updatedNewsDescription = news.description.slice(0, 149) + "...";
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${news.article_id}`, { state: { news } });
  };
  return (
    <div className="individual-news-wrapper">
      <div className="news-image-wrapper">
        {news.image_url ? (
          <img className="news-image" src={news.image_url} alt="news" />
        ) : (
          <div className="individual-image-not-found">Image not found.</div>
        )}

        <div className="news-info">
          {`${news.country[0]},`}
          <ReactTimeAgo date={news.pubDate} locale="en-US" />
        </div>
      </div>
      <CustomHeading headingLevel="h4">{news.title}</CustomHeading>
      <CustomHeading headingLevel="h6">
        {updatedNewsDescription ? (
          <span className="news-individual-description">
            {updatedNewsDescription}
          </span>
        ) : (
          <span className="news-individual-description">
            {news.description}
          </span>
        )}
      </CustomHeading>
      <CustomButton className="read-more-button" onClick={handleClick}>
        Read More
        <MdOutlineArrowOutward />
      </CustomButton>
    </div>
  );
};

export default CustomAllNewsCard;
